const mysql = require('mysql');

var getConnection = function (callback){
    var connection = mysql.createConnection({
        host        : 'localhost',
        database    : 'covid_room_booking',
        user        : 'root',
        password    : '' 
    });

    connection.connect((err) => {
        if(err){
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
    });

    callback(connection);
}

module.exports = {
    
    getResult: (sql, params, callback) => {
        getConnection(connection => {
            connection.query(sql, params, (error, result) => {
                callback(result);
            });

            connection.end(err => {
                if(err) console.log(err);

                console.log('Connection end..');
            });
        });
    },

    execute: (sql, params, callback) => {
        getConnection(connection => {
            connection.query(sql, params, (error, status) => {
                if(status){
                    callback(true);
                }
                else{
                    callback(false);
                }
            });

            connection.end(err => {
                if(err) console.log(err);

                console.log('Connection end..');
            });
        });
    }
}