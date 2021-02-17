const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// CONFIGURATION
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES
require('./controllers/routes/routes')(app);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});