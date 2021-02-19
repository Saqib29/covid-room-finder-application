const loginModel        = require('../../models/loginModel');
const { JWTauthentication }           = require('../../app/JWTauthentication');

function loginController(){
    return {
        // For render login page
        loginPage(req, res){
            return res.render('loginView/loginPage', { title : 'Login'});
        },

        // To login
        login(req, res){
            
            // message function for flash messages
            var message = (msg) => {
                req.flash('login_msg', msg);
            }

            loginModel.getUser(req.body, result => {
                if(!result){
                    message('Invalid username or password!');
                    return  res.redirect('/login');
                }
                
                // JWT authentication
                const token = JWTauthentication({ username : result.userName});
                res.cookie('x-access-token', token);
                return   res.redirect('/');
                
            });

        }
    }
}

module.exports = loginController;