// const { render } = require("ejs");
const loginModel    = require('../../models/loginModel');

function loginController(){
    return {
        loginPage(req, res){
            return res.render('loginView/loginPage', { title : 'Login'});
        },
        login(req, res){
            // Validation proccess
            loginModel.getUser(req.body, result => {
                console.log(result);
            });

        }
    }
}

module.exports = loginController;