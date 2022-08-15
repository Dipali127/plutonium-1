const UserModel= require("../models/userModel.js");
const createbook= async function(req,res){
    let bookdata=req.body;
    let savedbookdata=await UserModel.create(bookdata);
    res.send({message: savedbookdata});
}
const getbookdata=async function(req,res){
    let allbookdata=await UserModel.find();
    res.send({message: allbookdata});
}
module.exports.createbook=createbook;
module.exports.getbookdata=getbookdata;

// const createUser= async function (req, res) {
//     let data= req.body//lot of user data saved in "data" variable which is taken from body of "post api".
//     //calling create function from inside UserModel and passing "data" to create a data.And entire data will save on SavedData variable.
//     let savedData= await UserModel.create(data)//only way to access database is using UserModel.
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }


// module.exports.createUser= createUser;
// module.exports.getUsersData= getUsersData;