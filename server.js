const express = require('express');
const session = require('express-session');
const cookie  = require('cookie-parser');
const flash   = require('express-flash');
const app = express();

const PORT = process.env.PORT || 3000;

// CONFIGURATION
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookie());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(flash());

// ROUTES
require('./controllers/routes/routes')(app);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});