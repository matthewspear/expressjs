require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const districtRoutes = require('./routes/districtRoutes');
const leaderRoutes = require('./routes/leaderRoutes');
const messageRoutes = require('./routes/messageRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDBga ulandi'))
.catch(err => console.error('MongoDBga ulanishda xatolik:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/districts', districtRoutes);
app.use('/api/leaders', leaderRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portida ishga tushdi`);
});
