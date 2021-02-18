
function homeController(){
    return {
        index(req, res){
            return res.render('homeView/homePage', { title : 'Booking Page'});
        },

        bookRoom(req, res){
            console.log(req.body);
        },

        getCapacity(req, res){
            console.log(req.body);
        }
    }
}

module.exports = homeController;