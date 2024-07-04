const express = require('express');
const myRouter = express.Router();

let myObjectResponse1 = {
    srNo: 1,
    course: "Web Development",
    creditHours: 3
};

myRouter.get('/', (req, res) => {
    res.json({
        data: myObjectResponse1,
        message: 'Web Development'
    });
});

// Exporting so that it can be accessed from other files
module.exports = myRouter;
