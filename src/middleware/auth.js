const jwt = require("jsonwebtoken")

//check the token in request header
//validate this token
const authenticate = function (req, res, next) {
    let token = req.headers["x-auth-token"];
    req.token = token
    if (!token)
        return res.status(401).send({ status: false, msg: "token must be present in the request header" })
     next()
}


// comapre the logged in user's id and the id in request
//const token =req.headers["x-auth-token"];
const authorise = function (req, res, next) {
    let decodedToken = jwt.verify(req.token, 'functionup-plutonium')

    if (!decodedToken) return res.send({ status: false, msg: "token is not valid" })
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if (userToBeModified != userLoggedIn) return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

    next()
}
module.exports.authenticate = authenticate;
module.exports.authorise = authorise;