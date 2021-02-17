// const { render } = require("ejs");
const loginModel    = require('../../models/loginModel');

function loginController(){
    return {
        loginPage(req, res){
            return res.render('loginView/loginPage');
        },
        login(req, res){
            // Validation proccess
            loginModel.getUser(req.body, result => {
                console.log(result);
            });
            // console.log(req.body.password, req.body.userName);

        }
    }
}

module.exports = loginController;