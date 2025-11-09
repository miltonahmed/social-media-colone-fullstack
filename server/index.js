// Load environment variables
const dotenv = require('dotenv');
dotenv.config();

// Import dependencies
const express = require('express');
const cors = require('cors');
const router = require('./routes/route')

// Initialize app
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());// Optional: enables JSON body parsing
app.use(router)

// // Routes
// app.get('/', (req, res) => {
//   res.send('✅ Server is available');
// });

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
