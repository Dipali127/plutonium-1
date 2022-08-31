const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//Question-1
const createUser = async function (req, res) {
    try {
        let data = req.body;
        console.log(data);
        if (data) {
            let savedData = await userModel.create(data);
            res.status(201).send({ msg: savedData });
        }
        else {
            res.status(400).send({ mssg: "BAD REQUEST" });
        }
    }
    catch (error) {
        res.status(500).send({ Error: "server side issue" })
    }
}

//Question-2

const loginUser = async function (req, res) {
    try {
        let userName = req.body.emailId;
        let password = req.body.password;

        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user) {
            return res.status(400).send({
                status: false,
                msg: "username or the password is not corerct",
            })
        }
        else {

            let token = jwt.sign(
                {
                    userId: user._id.toString(),
                    batch: "plutonium",
                    organisation: "FUnctionUp",
                },
                "functionup-plutonium"
            );
            res.setHeader("x-auth-token", token);
            res.send({ status: true, data: token });
        }
    } catch (error) {
        res.status(500).send({ message: "Server side issue" });
    }
};

//Question-3

//let token = req.headers["x-auth-token"];
//if (!token) token = req.headers["x-auth-token"];

//If no token is present in the request header return error
// if (!token) return res.send({ status: false, msg: "token must be present" });

const getUserData = async function (req, res) {
    try {
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails)
            return res.send({ status: false, msg: "No such user exists" });

        res.status(201).send({ status: true, data: userDetails });
    } catch (error) {
        res.status(500).send({ message: "Server side issue" })
    }
};

//Question-4
const updateUser = async function (req, res) {
    try {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        if (!user) {
            return res.send("No such user exists");
        }

        let userData = req.body;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
        res.status(201).send({ status: updatedUser, data: updatedUser });
    } catch (error) {
        res.status(500).send({ message: "Server side issue" })
    }
};

//Question-5


const deleteUser = async function (req, res) {
    try {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        if (!user) {
            return res.send("This user doesn't exist.");
        }
        let newData = user.isDeleted
        if (newData == false) {
            return res.send("cannot delete")
        }
        else {
            let updatedUser = await userModel.findByIdAndUpdate({ _id: userId })
            res.status(201).send({ status: true, messsage: "deleted", updatedUser });
        }
    } catch (error) {
        res.status(500).send({ message: "Server side issue" })
    }
}
//Question-6

const postMessage = async function (req, res) {
    let message = req.body.message
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token must be present in the request header" })
    let decodedToken = jwt.verify(token, 'functionup-plutonium')

    if (!decodedToken) return res.send({ status: false, msg: "token is not valid" })

    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

    let user = await userModel.findById(req.params.userId)
    if (!user) return res.send({ status: false, msg: 'No such user exists' })

    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

    //return the updated user document
    return res.send({ status: true, data: updatedUser })
}

module.exports.deleteUser = deleteUser;
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
