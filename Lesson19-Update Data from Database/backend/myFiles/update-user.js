//File: update-user.js in ROOT-FOLDER/myFiles/ folder
 
const myExpress = require('express')
 
const myRouter = myExpress.Router()
const myUser = require('../myschema/UserSchema') //one folder back from "this" file
 
//:reqID4Delete is for getting ID from endpoint
myRouter.put('/:reqID4Update',
    async (req, res) => {
        let mySuccess = false
 
        //get id from endpoint
        let idUpdating = req.params.reqID4Update
 
        //first checking; either the ID exist or not
        //getting the data that is being updated. Data's ID will be in URL/API
        const getUser = await myUser.findById(idUpdating)
 
        //sending response if there is no data in the database against requested-ID
        if (!getUser) {
            return res.status(404).send({ success: mySuccess, message: "No data exist having the ID" })
        }
 
        //getting requrested-content from req-body
        let newName = req.body.newName
        let newfName = req.body.newfName
 
        //creating object having updating data
        let newData = {} //blank object
        if (newName) { newData.name = newName } //create "name" field if data for newName exists
        if (newfName) { newData.fname = newfName }//create "fname" field if data for newfName exists
 
        try {
            //below code will be executed only if there is no issue in above checks
            //updating the data in database
            const updatedData = await myUser.findByIdAndUpdate(idUpdating, { $set: newData }, { new: true })
 
            mySuccess = true
 
            //just display the updated note
            res.json({ updatedData: updatedData, success: mySuccess })
        }
        catch (e) {
            res.status(400).send({ success: mySuccess, message: "Internal Server Error" })
        }
    }
)
//exporting so that it can access from other files
module.exports = myRouter