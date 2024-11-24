const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middleware/errorMiddleware');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use the post routes
app.use('/api/posts', postRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});