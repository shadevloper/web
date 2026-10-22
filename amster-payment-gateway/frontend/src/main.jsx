import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    paymentType: "Registration Fee",
    amount: "",
    remark: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const payNow = async (e) => {
    e.preventDefault();
    setMessage("");

    const amount = Number(form.amount);
    if (!form.name || !form.phone || !form.email || !amount || amount <= 0) {
      setMessage("Please enter all details and a valid amount.");
      return;
    }

    setLoading(true);
    try {
      const orderRes = await fetch(`${API_BASE}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const order = await orderRes.json();
      if (!orderRes.ok) throw new Error(order.message || "Unable to create payment.");

      if (!window.Razorpay) {
        throw new Error("Razorpay Checkout is not loaded.");
      }

      const options = {
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Amster Overseas",
        description: form.paymentType,
        order_id: order.id,
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone
        },
        notes: {
          payment_type: form.paymentType
        },
        theme: { color: "#d52f2f" },

        config: {
          display: {
            blocks: {
              payment_methods: {
                name: "Pay using",
                instruments: [
                  {
                    method: "card",
                  },
                  {
                    method: "upi",
                  },
                  {
                    method: "netbanking",
                  },
                ],
              },
            },

            sequence: [
              "block.payment_methods",
            ],

            preferences: {
              show_default_blocks: false,
            },
          },
        },

        handler: async (response) => {

                 try {
            setLoading(true);
            setMessage("Verifying payment...");

          const verifyRes = await fetch(`${API_BASE}/api/payment/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...form,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            })
          });
          const result = await verifyRes.json();

          if (verifyRes.ok && result.success) {
            window.location.href =
              `/success.html?payment_id=${encodeURIComponent(response.razorpay_payment_id)}`;
          } else {
            setMessage(result.message || "Payment verification failed.");
          }
        }catch (error) {
            setMessage(
              error.message ||
                "Payment verification failed."
            );
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: () => setMessage("Payment window was closed.")
        }
      };

       const razorpay =
        new window.Razorpay(options);

              razorpay.on(
        "payment.failed",
        function (response) {
          setLoading(false);

          setMessage(
            response.error?.description ||
              "Payment failed. Please try again."
          );
        }
      );

      razorpay.open();
    } catch (error) {
      setLoading(false);

      setMessage(
        error.message ||
          "Something went wrong."
      );
    }
  };




  return (
    <main className="page">
      <section className="card">
        <div className="brand">
          <img src="/amster-logo.png" alt="Amster Overseas" />
        </div>

        <div className="heading">
          <p className="eyebrow">SECURE ONLINE PAYMENT</p>
          <h1>Make a Payment</h1>
          <p>Complete your payment securely through Razorpay.</p>
        </div>

        <form onSubmit={payNow}>
          <label>Full Name</label>
          <input name="name" value={form.name} onChange={update}
                 placeholder="Enter your full name" required />

          <label>Mobile Number</label>
          <input name="phone" value={form.phone} onChange={update}
                 placeholder="Enter your mobile number" inputMode="numeric"
                 maxLength="15" required />

          <label>Email Address</label>
          <input name="email" type="email" value={form.email} onChange={update}
                 placeholder="Enter your email address" required />

          <label>Payment Type</label>
          <select name="paymentType" value={form.paymentType} onChange={update}>
            <option>Canada Fee</option>
            <option>Australia Fee</option>
            <option>Work Permit</option>
             </select>

             <label>Remark</label>
             <input name="remark" value={form.remark} onChange={update}
               placeholder="Remark" />

          <label>Amount (INR)</label>
          <div className="amount">
            <span>₹</span>
            <input name="amount" type="number" min="1" step="0.01"
                   value={form.amount} onChange={update}
                   placeholder="Enter amount" required />
          </div>

         
          {message && <div className="message">{message}</div>}

          <button disabled={loading}>
            {loading ? "Processing..." : "Proceed to Pay"}
          </button>
        </form>

        <div className="secure">
          🔒 Secure payment powered by Razorpay
        </div>
        <footer>© Amster Overseas. All rights reserved.</footer>
      </section>
    </main>
  );
}

const script = document.createElement("script");
script.src = "https://checkout.razorpay.com/v1/checkout.js";
document.head.appendChild(script);

createRoot(document.getElementById("root")).render(<App />);
