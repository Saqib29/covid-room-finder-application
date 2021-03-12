const db = require('../../models/dbConnection/db');
const homeModel = require('../../models/homeModel');
const moment   = require('moment');

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
            if(req.body.date < moment(new Date()).format('YYYY-MM-DD')){
                var message = `Please put a valid date! not before ${moment(new Date()).format('YYYY-MM-DD')}`;
                return  res.json({ type : 'invalid', message });
            }
            else{
                // get total places
                homeModel.getTotalPlaces(totalPlaces => {
                    
                    // get total bookings on a particular day
                    homeModel.allBookingsOnTheDay(req.body.date, (result) => {

                        var parcentage = parseInt(100 - (100 * (result.total_book / totalPlaces.places))); // calculate parcentage

                        if(!parcentage) parcentage = 100;  // manage if there is no booking on a specific date
                        
                        return  res.json({ type : 'success', parcentage });
                    });
                });
            }
        }
    }
}

module.exports = homeController;