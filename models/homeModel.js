const db = require('./dbConnection/db');

module.exports = {
    getRooms: (callback) => {
        var sql = `SELECT * FROM roomtable`;
        db.getResult(sql, null, (rooms) => {
            callback(rooms)
        });
    },

    getRoomById: (roomId, callback) => {
        var sql = `SELECT roomName, roomCapacity FROM roomtable WHERE roomId = ?`;
        db.getResult(sql, [roomId], (room) => {
            callback(room[0]);
        });
    },

    bookingAvailableOnDate: (date, id, callback) => {
        var sql = `SELECT userName FROM bookingtable WHERE date = ? AND roomId = ?`;
        db.getResult(sql, [date, id], (result) => {
            callback(result);
        });
    },

    book: (data, callback) => {
        var sql = `INSERT INTO bookingtable (userId, userName, roomId, roomName, date) VALUES (?, ?, ?, ?, ?)`;
        db.execute(sql, [
            data.userId,
            data.userName,
            data.roomId, 
            data.roomName,
            data.date
        ], status => {
            callback(status);
        });
    },

    getAlternativeByDate: (date, callback) => {
        var sql = `SELECT roomName, roomCapacity FROM roomtable WHERE roomName NOT IN (SELECT roomName FROM bookingtable WHERE date = ?)`;
        db.getResult(sql, [date], (roomNames) => {
            callback(roomNames);
        });
    }
}