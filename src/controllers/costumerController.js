// const { count } = require("console");
// const { nextTick } = require("process");
const costumerModel = require("../models/costumermodel")



const headerValidationCount =  async function (req, res, next) {
    let appUser = req.headers["isfreeappuser"]
    let x = 'true'
    if (appUser === undefined) {
        return res.send({msg:"request is missing a mandatory header"})
    } 
    else if
     
      (appUser==x){

        req.isFreeAppUser=Boolean(appUser)//get the value of isfreeappuser from request header.
        console.log(req.isFreeAppUser)
    }

     else {
      
        req.isFreeAppUser=!appUser
        console.log(req.isFreeAppUser)
     }
     next()
       
    }
   
      



const createCoustmer= async function (req, res) {
    let data= req.body
    let x = 'true'
    let y  = 'false'
     
     if (req.headers["isfreeappuser"]==x){

        req.isFreeAppUser=Boolean(x)
    }

     else {
      
        req.isFreeAppUser=(y)//(!y)
     }

     data.isFreeAppUser=req.isFreeAppUser
     let savedData1= await costumerModel.create(data)
     res.send({msg: savedData1})
}




module.exports.createCoustmer= createCoustmer
module.exports.headerValidationCount= headerValidationCount