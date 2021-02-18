const db = require('./dbConnection/db');


module.exports = {
    
    checkUsernameExist: (username, callback) => {
        var sql = `SELECT COUNT(*) AS exist FROM usertable WHERE userName = ?`;
        db.getResult(sql, [username], (result) => {
            callback(result[0]);
        });
    },

    insertUser: (user, callback) => {
        var sql = `INSERT INTO usertable (userName, password) VALUES (?, ?)`;
        db.execute(sql, [user.userName, user.password], (result) => {
            callback(result);
        });
    }
}