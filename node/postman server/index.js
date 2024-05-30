const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
let app = express()
app.use(cors())
app.use(bodyParser.json())
const HOST = 5000

let arr = [{username:'Sam', address:'New-York', id:1}]

app.get('/getUsers', (req, res) => {
   res.json(arr)
})

app.post('/addUser', (req, res) => {
    let addedUser = req.body
    if (arr.length === 0) {
        addedUser = {...addedUser, id:1}
}else{
    addedUser = {...addedUser, id: arr.at(-1).id + 1}
}
arr.push(addedUser)
})

app.listen(HOST, (err) => {
    if (err) {
      console.log(err);  
      return
    }
    console.log(`localhost:${HOST}`);
})