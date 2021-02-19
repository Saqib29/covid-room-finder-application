const homeController  = require('../homeControllers/homeController');
const loginController = require('../loginControllers/loginController');
const registerController = require('../registerControllers/registerController');
const { verify }        = require('../../app/JWTauthentication');


function allRoutes(app){
    // Home
    app.get('/', verify, homeController().index);
    app.post('/bookroom', homeController().bookRoom);
    app.post('/getroomcapacity', homeController().getCapacity);

    // LOGIN
    app.get('/login', loginController().loginPage);
    app.post('/login', loginController().login);

    // REGISTER
    app.get('/register', registerController().registerPage);
    app.post('/register', registerController().register);
}

module.exports = allRoutes;