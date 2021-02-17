
function registerController(){
    return {
        registerPage(req, res){
            return res.render('registerView/registerPage');;
        }
    }
}

module.exports = registerController;