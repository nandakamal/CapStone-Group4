require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');

    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

// Routes
const venueRoutes = require('./routes/venueRoutes');
const packageRoutes = require('./routes/packageRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/venues', venueRoutes);
app.use('/packages', packageRoutes);
app.use('/users', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
