import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";
import Razorpay from "razorpay";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

const PaymentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  paymentType: {
    type: String,
    enum: ["Registration Fee", "Service Fee", "Initial Payment"]
  },
  amount: Number,
  razorpayOrderId: String,
  razorpayPaymentId: String,
  paymentStatus: { type: String, default: "Created" },
  createdAt: { type: Date, default: Date.now }
});

const Payment = mongoose.model("Payment", PaymentSchema);

app.get("/api/health", (_, res) => res.json({ ok: true }));

app.post("/api/payment/create-order", async (req, res) => {
  try {
    const { name, phone, email, paymentType, amount } = req.body;
    if (!name || !phone || !email || !paymentType || !amount || Number(amount) <= 0) {
      return res.status(400).json({ message: "Invalid payment details." });
    }

    const order = await razorpay.orders.create({
      amount: Math.round(Number(amount) * 100),
      currency: "INR",
      receipt: `amster_${Date.now()}`,
      notes: { paymentType, customerName: name }
    });

    await Payment.create({
      name, phone, email, paymentType,
      amount: Number(amount),
      razorpayOrderId: order.id,
      paymentStatus: "Created"
    });

    res.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not create Razorpay order." });
  }
});

app.post("/api/payment/verify", async (req, res) => {
  try {
    const {
      name, phone, email, paymentType, amount,
      razorpay_order_id, razorpay_payment_id, razorpay_signature
    } = req.body;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: "Invalid payment signature." });
    }

    await Payment.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id },
      {
        name, phone, email, paymentType,
        amount: Number(amount),
        razorpayPaymentId: razorpay_payment_id,
        paymentStatus: "Paid"
      },
      { new: true }
    );

    res.json({ success: true, paymentId: razorpay_payment_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Payment verification failed." });
  }
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Payment backend running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
