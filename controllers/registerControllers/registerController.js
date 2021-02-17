
function registerController(){
    return {
        registerPage(req, res){
            return res.send('Hello from registerController');
        }
    }
}

module.exports = registerController;