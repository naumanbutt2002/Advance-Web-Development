const express = require('express')
const myRouter = express.Router()
 
myRouter.get('/', (req, res) => {
    let myObjectResponse={
        srNo: 5,
        course: "Web Development",
        creditHours: 3
    }
    res.json(myObjectResponse)
})
//exporting so that it can access from other files
module.exports = myRouter