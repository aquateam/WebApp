const express = require('express')
const router = express.Router();

const User = require('../models/User')

router.get('/user', function(req, res){
    User.find({}, (err, User)=>{
        res.json(User)
    })
})
router.post('/user', function(req,res){
    var user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
    })
    user.save(user, (err, result)=>{
        res.send(result)
    })


})

router.delete('/User/:id',(req,res)=>{
    //  console.log(req.paramas.id);
    User.findByIdAndRemove({_id: req.params.id}).then(function(user){
        res.send(user);
        //   res.send({type:'Offer Deleted'})
    });

});
router.get('/User/:id', (req, res)=>{
    User.findById(req.params.id, (err, result)=>{
        res.json(result)
    })
})

module.exports = router;
