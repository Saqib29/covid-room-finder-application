const jwt               = require('jsonwebtoken');

var ACCESS_TOKEN = "this_token_should_be_hidden";


function JWTauthentication(user, next){
    const accessToken = jwt.sign(user, ACCESS_TOKEN, { expiresIn : '1h' });
    return accessToken;
}

function verify(req, res, next){
    const token = req.cookies['x-access-token'];
    if(token == null) return  res.redirect('/login');

    jwt.verify(token, ACCESS_TOKEN, (err, result) => {
        if(err) return  res.redirect('/login');
        next();
    });
}

module.exports = {
    JWTauthentication,
    verify
}