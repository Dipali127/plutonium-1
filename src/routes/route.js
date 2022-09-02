const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getByDistrict",CowinController.getByDistrictIdandDate)
router.get("/Weatheroflondon",CowinController.getWeatherofLondon)
router.get("/Temperatureoflondon",CowinController.getTemperatureofLondon)
router.get("/Sortedcities",CowinController.getcityInSorted)
router.get("/getMemes",CowinController.getMemes)
router.post("/MemesData",CowinController.MemesData)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;