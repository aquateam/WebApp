const express = require('express')
const app = express();
const mongoose = require('mongoose')
const user = require('./routes/User');
const devices = require('./routes/devices');
const bodyParser = require('body-parser')


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/aqua')
    .then((err)=>{
        if(err){
            console.log(err);
        }
    })
app.use(bodyParser.json())

app.use('/api', user);
app.use('/api', devices);


app.get('/',  (req, res) => {
    res.send('Hello World!')
})

app.get('/aqua', (req,res)=>{
    res.send('This is Aqua')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
