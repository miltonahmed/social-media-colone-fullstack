const mongoose = require('mongoose');
exports.connect = () => {
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
    console.log('Database successfully connected');
    }).catch((err) => {
  console.error("❌ Failed to connect to the database:", err);
});

  
  
};
