# Enquiry Feature Implementation

## Backend
- [x] Create `backend/models/Enquiry.js` (Mongoose schema: name, email, phone, country, message, createdAt)
- [x] Create `backend/controllers/enquiryController.js` (save to MongoDB → send admin email → respond)
- [x] Create `backend/routes/enquiryRoute.js` (POST /enquiry)
- [x] Mount route in `backend/server.js`

## Frontend
- [x] Create `frontend/src/components/enquiry/EnquiryForm.jsx` (validated form + fetch + toast)
- [x] Create `frontend/src/components/enquiry/EnquiryForm.css`
- [x] Add `/enquiry` route in `frontend/src/App.jsx`

## Testing
- [x] Backend syntax validated with `node --check` on all new/modified files
- [x] Frontend production build succeeded (`npm.cmd run build`)
- [x] Backend server started (running on port 5000)
- [x] Live API test: `POST /api/enquiry` returned `{ success: true, message: "Enquiry submitted successfully", data: {...} }` — enquiry saved to MongoDB with `_id` and `createdAt`

