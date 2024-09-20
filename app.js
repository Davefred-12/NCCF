const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const User = require('./models/user');

const app = express();

// Set up middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/NCCF');

// Multer setup for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
    res.render('welcome');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', upload.single('passport'), async (req, res) => {
    try {
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            passport: req.file.filename,
            gender: req.body.gender,
            bornAgain: req.body.bornAgain,
            church: req.body.church,
            abideRules: req.body.abideRules,
            suggestions: req.body.suggestions,
        });

        await newUser.save();
        res.redirect(`/thankyou?name=${newUser.firstName}&passport=${newUser.passport}`);
    } catch (err) {
        console.error(err);
        res.send('Error registering user');
    }
});

app.get('/thankyou', (req, res) => {
    const { name, passport } = req.query;
    res.render('thankyou', { name, passport });
});

app.get('/thankyou', (req, res) => {
    const name = req.query.name;
    res.render('thankyou', { name });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
