import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';

dotenv.config();

// Improved MongoDB connection with options and better error handling
mongoose
  .connect(process.env.MONGO, {
    // Connection pool size
    maxPoolSize: 10,
    // Set timeout to 30 seconds (30000ms)
    socketTimeoutMS: 30000,
    // Set connection timeout to 30 seconds (30000ms)
    connectTimeoutMS: 30000,
    // Use new URL parser
    useNewUrlParser: true,
    // Use unified topology
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit with failure if can't connect to database
  });

// Add MongoDB connection error handler
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Add MongoDB disconnection handler
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Add graceful shutdown for MongoDB connection
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});

const __dirname = path.resolve();

const app = express();

// Updated CORS configuration to allow all origins
app.use(cors({
  origin: true, // Allow requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use(express.json());
app.use(cookieParser());

// Make sure routes are set up after MongoDB connection is established
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error('Error:', err); // Enhanced error logging
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});