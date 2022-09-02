let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ASSIGNMENT:QUESTION-1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let getByDistrictIdandDate = async function (req, res) {
    try {
        let district_id = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${district_id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ASSIGNMENT:QUESTION-1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let getWeatherofLondon = async function (req, res) {
    try {
        let city = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${city} ${appid}`)
        var options = {
            method: "get",
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=c125ef95f2c642422712011b125cb2a9'
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ASSIGNMENT:QUESTION-2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let getTemperatureofLondon = async function (req, res) {

    try {
        let City = req.query.city
        let appId = req.query.appid
        ///  let date = req.query.date
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${appId}`

        }
        let result = await axios(options);
        console.log(result)
        let temperature = result.data.main.temp
        let x = [{ City: req.query.city, temp: temperature }]
        res.status(200).send({ message: x, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getcityInSorted = async function (req, res) {
        try {
            let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
            let NewArray = []
            for (let i = 0; i < cities.length; i++) {
               let obj = { city: cities[i] }//{city:bengaluru}
                let option ={
                    method:"get",
                    url:(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c125ef95f2c642422712011b125cb2a9`)
                }
                let result=await axios(option)
                obj.temp=result.data.main.temp//{city:"Bengaluru",temp:"301.2"}
                NewArray.push(obj)

                }
            //cityObjArray=[{city:"Bengaluru", temp:301.2},{city:"mumbai", temp:304.2},.....like this all city ]
            //sort city based on temperature in a increasing order.
            let sortingBycity = NewArray.sort(function(a, b){return a.temp-b.temp })
            console.log(sortingBycity)
            res.status(200).send({data: sortingBycity })
        }
        catch (error) {
            res.status(500).send({ status: false, message: "Server side issue" })
        }
    
    }
   //------------------------------------ AXIOS POST REQUEST ASSIGNMENT--------------------------------------------
   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ASSIGNMENT:QUESTION-1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
   let getMemes = async function(req,res){

        try {
            let options = {
                method: 'get',
                url: 'https://api.imgflip.com/get_memes'
            }
            let result = await axios(options);
            console.log(result)
            let data = result.data
            res.status(200).send({ msg: data, status: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ASSIGNMENT:QUESTION-2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    let MemesData = async function(req,res){

        try {
            let memeId =req.body.template_id
            let text0=req.body.text0
            let text1=req.body.text1

            let options = {
                method: 'post',
                url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`

            }
            let result = await axios(options);
            console.log(result)
            let data = result.data
            res.status(200).send({ msg: data, status: true })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }


module.exports.getByDistrictIdandDate = getByDistrictIdandDate
module.exports.getWeatherofLondon = getWeatherofLondon
module.exports.getTemperatureofLondon = getTemperatureofLondon
module.exports.getcityInSorted = getcityInSorted
module.exports.getMemes=getMemes
module.exports.MemesData=MemesData
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp