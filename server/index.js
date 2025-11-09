// Load environment variables
const dotenv = require('dotenv');
dotenv.config();
// Import dependencies
const express = require('express');
const cors = require('cors');
const router = require('./routes/route')
const { connect } = require('./database/databaseConfig')

// Database connect
connect()

// Initialize app
const app = express();
const port = process.env.PORT || 8000;


// express and  Middleware
app.use(cors());
app.use(express.json());// Optional: enables JSON body parsing
app.use(router)



// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
