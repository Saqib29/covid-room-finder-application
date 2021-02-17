
function homeController(){
    return {
        index(req, res){
            return res.render('homeView/homePage');
        }
    }
}

module.exports = homeController;