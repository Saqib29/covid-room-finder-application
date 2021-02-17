const homeController  = require('../homeControllers/homeController');
const loginController = require('../loginControllers/loginController');
const registerController = require('../registerControllers/registerController');

function allRoutes(app){
    // Home
    app.get('/', homeController().index);

    // LOGIN
    app.get('/login', loginController().loginPage);

    // REGISTER
    app.get('/register', registerController().registerPage);
}

module.exports = allRoutes;