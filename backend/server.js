<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();

// CORS configuration - CORRECTED PORT (3000 instead of 3001)
app.use(cors({
  origin: 'http://localhost:3000', // <- FIXED THIS LINE
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Simple request logger to see all incoming requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Sync DB and Start Server
sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
=======
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();

// CORS configuration - CORRECTED PORT (3000 instead of 3001)
app.use(cors({
  origin: 'http://localhost:3000', // <- FIXED THIS LINE
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Simple request logger to see all incoming requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Sync DB and Start Server
sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
>>>>>>> 996297610fa71b72c51f026d8708a5b87f17f749
}).catch(err => console.error('Database sync failed:', err));