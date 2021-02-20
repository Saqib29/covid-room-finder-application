const db = require('../../models/dbConnection/db');
const homeModel = require('../../models/homeModel');

function homeController(){
    return {
        index(req, res){
            homeModel.getRooms(rooms => {
                
                return res.render('homeView/homePage', { 
                    title : 'Booking Page',
                    rooms : rooms
                });
            });
        },

        async bookRoom(req, res){
            homeModel.getRoomById(req.body.roomId, room => {
                homeModel.bookingAvailableOnDate(req.body.date, req.body.roomId, async (result) => {
                    
                    // Check the capacity available on the date by comparing all bookings length with the room capacity
                    if(room.roomCapacity <= result.length){
                        let mesage = '';
                        homeModel.getAlternativeByDate(req.body.date, (alternatives) => {
                            for(var i=0; i<alternatives.length; i++){
                                
                                mesage = `[${alternatives[i].roomName} with open place ${alternatives[i].roomCapacity}]` + ", " + mesage;
                            }
                            
                            return res.json({ result, type : 'booking_full', mesage  });
                        });
                    } else {

                        const booking = {
                            userId   : req.cookies['userId'],
                            userName : req.body.name,
                            roomId   : req.body.roomId,
                            roomName : room.roomName,
                            date     : req.body.date
                        }
                            
                        // booking
                        homeModel.book(booking, status => {
                            console.log('success');
                            return  res.json({ type : 'success_booking', booking });
                        });
                    }
                    
                });
                
                
            });
            
        },

        getCapacity(req, res){
            console.log(req.body);
        }
    }
}

module.exports = homeController;