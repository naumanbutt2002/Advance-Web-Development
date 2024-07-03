//Example 1 Displaying Hello World message on both browser window and Thunder Client Extension.
// const express = require('express')
// const app = express()
// const port = 5000
 
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.listen(port)

//Example 2: Create multiple endpoints/routes unlike example 1 in which only one endpoint is created.
// const express = require('express')
// const app = express()
// const port = 3000
 
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.get('/awd', (req, res) => {
//     res.send('Advance Web Development')
// })
// app.get('/awd/exercise1', (req, res) => {
//     res.send('Exercises 1')
// })
// app.get('/awd/exercise1/result', (req, res) => {
//     res.send('Result1')
// })
// app.listen(port)

//Example 3: Create multiple endpoints just as in previous example but code for each endpoint should be separate file.

const express = require('express')
const app = express()
const port = 5000
 
app.get('/', (req, res) => {
    res.send('Main page')
})
app.use('/web', require('./myFiles/course'))
app.use('/web/exercise', require("./myFiles/exercise"))
app.use('/web/exercise/result', require("./myFiles/result"))
 
app.listen(port)