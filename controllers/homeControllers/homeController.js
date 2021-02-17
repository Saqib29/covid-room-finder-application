
function homeController(){
    return {
        index(req, res){
            return res.send('<h1>Hello from HomeController</h1>');
        }
    }
}

module.exports = homeController;