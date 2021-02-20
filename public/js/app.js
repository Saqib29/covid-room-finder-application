

// Book working place
document.querySelector('#book_working_place').addEventListener('submit', (e) => {
    e.preventDefault();
    var roomId = document.querySelector('#roomId').value
    var date   = document.querySelector('#date').value;
    var name   = document.querySelector('#name').value;
    
    axios.post('/bookroom', { roomId, date, name }).then(result => {
        var div = document.getElementById("message");
        var child = document.getElementById("child");
        div.innerHTML = '';

        if(result.data.type == 'booking_full'){
            
            var names = '';
            result.data.result.map(name => {
                names =  name.userName + ', ' + names;
            });

            var p = document.createElement("p");
            p.setAttribute('id', 'child')
            p.setAttribute('style', 'color: red')
            var message = document.createTextNode(`Room is already booked out by ${names.slice(0,-2)} on this day.`);
            p.appendChild(message);
            div.appendChild(p);
            
            var p = document.createElement("p");
            p.setAttribute('id', 'child')
            p.setAttribute('style', 'color: green')
            var message = document.createTextNode(`Try room(s): ` + result.data.mesage);
            p.appendChild(message);
            div.appendChild(p)

        }
        else if(result.data.type == 'success_booking'){
            var p = document.createElement("p");
            p.setAttribute('id', 'child')
            p.setAttribute('style', 'color: green')
            var message = document.createTextNode(`We booked successfully a place in ` + result.data.booking.roomName + " on " + result.data.booking.date + " for you");
            p.appendChild(message);
            div.appendChild(p)

            console.log(result.data.booking);
        }
    })

});

// Get capacity
document.querySelector('#get_capacity').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Get Capacity');
});

