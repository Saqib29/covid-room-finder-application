const db = require('./dbConnection/db');

module.exports = {

    getUser: (user, callback) => {
        var sql = `SELECT * FROM usertable WHERE userName = ? AND password = ?`;
        db.getResult(sql, [user.userName, user.password], (results) => {
            callback(results);
        });
    }
}