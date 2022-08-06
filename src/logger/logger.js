 const batchName = "Plutonium"

 let Welcome = function() {
     console.log('Welcome to my application. I am <Dipali> and a part of FunctionUp Plutonium cohort.’ ', batchName)
 }
//by default nodejs is private so we cant dirctly call function because they are private so making these
//public we hav to use this below syntax .
//the batchname variable and welcome variable will be public now.
//syntax to make public :module.exports.any public name]

 module.exports.name = batchName
 module.exports.Welcome = Welcome