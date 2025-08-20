const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const hotelRoutes = require('./routers/hotelRouter');
const roomRoutes = require('./routers/roomRouter');
const bookingRoutes = require('./routers/bookingRouter');
// const rsaRoutes = require('./routers/rsaRouter'); // Added
const userRoutes = require('./routers/user');
const contactRoutes = require('./routers/contact');



dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "10mb" }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/hotels', hotelRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/users', userRoutes);
app.use('/api', contactRoutes);
app.get('/',(req,res)=>{
  res.send({
    activeStatus:true,
    error:false
  })
})

// app.use('/api/rsa', rsaRoutes); // Added

// DB Connection & Server Start
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
}).catch((err) => console.error('DB Connection Error:', err));
