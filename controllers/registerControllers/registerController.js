const passwordValidator = require('password-validator');
const registerModel     = require('../../models/registerModel');

function registerController(){
    return {
        registerPage(req, res){
            return res.render('registerView/registerPage', { title : 'Register'});
        },

        register(req, res){
            
            // message function for flash messages
            var messages = (msg) => {
                req.flash('reg_error', msg);
                
            }

            // should check password has 6 characters long and at least symbol
            var schema = new passwordValidator();
            schema.is().min(6).max(20).symbols(1);
            if(!schema.validate(req.body.password)){
                messages('Password has to be at least 6 characters long with at least 1 symbol');
                return  res.redirect('/register');
            }

            // check username length
            let l = req.body.userName;
            if(req.body.userName.length < 3){
                messages('Username must have more than 3 characters!');
                return  res.redirect('/register');
            }
            
            // unmatch password and confirm password
            if(req.body.password != req.body.confirmpassword){
                messages(`password doesn't matched!`);
                return res.redirect('/register');
            }

            registerModel.checkUsernameExist(req.body.userName, (result) => {

                // check username existance in database
                if(result.exist){
                    messages("username already exists!");
                    return  res.redirect('/register');
                }

                // Register the user into db
                registerModel.insertUser({
                    userName: req.body.userName,
                    password: req.body.password
                }, (status) => {
                    if(status){
                        return  res.redirect('/login');
                    } else {
                        messages('Something went wrong!  please try again.');
                        return  res.redirect('/register');
                    }
                });
            });

        }
    }
}

module.exports = registerController;