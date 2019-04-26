const express = require('express')
const router = express.Router();

const Devices = require('../models/Devices')
const User = require('../models/User');

router.get('/Devices', function(req, res){
    Devices.find({}, (err, Devices)=>{
        res.json(Devices)
    })
})
router.get('/Devices/:id', (req, res)=>{
    Devices.findById(req.params.id, (err, result)=>{
        res.json(result)
    })
})
router.delete('/Devices/:id',(req,res)=>{
    //  console.log(req.paramas.id);
    Devices.findByIdAndRemove({_id: req.params.id}).then(function(device){
        res.send(device);
        //   res.send({type:'device Deleted'})
    });
});
router.post('/Devices',(req,res)=>{
    var date = new Date();
    var device = new Devices ({
        price: req.body.price,
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        Date: date.getDate() + '/' + date.getMonth()+ '/' + date.getFullYear(),
    })

    device.save(device, (err, result)=>{
        var id = result._id;
        User.findById(req.body.id, (err, result)=>{
            result.Devices.push(id);
            result.save(result, (err, result)=>{
                res.send(result);
            })
        })
    })

})

module.exports = router
