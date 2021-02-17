
function loginController(){
    return {
        loginPage(req, res){
            return res.send("<h1>Hello from LoginController</h1>");
        }
    }
}

module.exports = loginController;