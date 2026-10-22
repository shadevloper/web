# Amster Overseas - Separate Razorpay Payment Page

This is a standalone React + Node.js + MongoDB payment page using Razorpay.

## Payment types
- Registration Fee
- Service Fee
- Initial Payment

## Before going live
1. Create/activate your Razorpay merchant account.
2. Copy the Razorpay Test API keys into `backend/.env`.
3. Add your MongoDB connection string to `backend/.env`.
4. Run the backend:
   `cd backend`
   `npm install`
   `npm run dev`
5. Run the frontend:
   `cd frontend`
   `npm install`
   `npm run dev`
6. Test payments in Razorpay Test Mode.
7. For production, use Live API keys and deploy the frontend/backend over HTTPS.

## Important
- Never put `RAZORPAY_KEY_SECRET` in React/frontend code.
- The backend creates Razorpay orders and verifies the payment signature.
- This starter accepts a customer-entered amount. If your fees are fixed, change the backend to enforce fixed amounts before going live.
- For production, add Razorpay webhooks and additional server-side order/payment validation as needed.
