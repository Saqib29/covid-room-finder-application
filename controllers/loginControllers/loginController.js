const { render } = require("ejs");

function loginController(){
    return {
        loginPage(req, res){
            return res.render('loginView/loginPage');
        }
    }
}

module.exports = loginController;