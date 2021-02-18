
function registerController(){
    return {
        registerPage(req, res){
            return res.render('registerView/registerPage');;
        },

        register(req, res){
            console.log(req.body);
        }
    }
}

module.exports = registerController;