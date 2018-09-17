const router = require('express').Router();
const mongoose = require('mongoose');
const User = require("../Models/user");

mongoose.connect('mongodb://localhost:27017/VoteDB');

const userModel = mongoose.model('users', User);


router.post('/add', async (req, res) => {
    var post = req.body;
    const result = await userModel.create(post);
   
    const token = jwt.sign({ data: result }, "pass123")
    res.send({ user : result, message: 'you are sign up', userToken: token });
});


router.get('/user/:id', async (req, res) => {
    id = req.params.id;
    console.log(id);
    const result = await userModel.findById(id).exec();
    res.send(result);
});



router.post('/update/:id', async (req, res) => {
    id = req.params.id;
    var post = req.body;
    var objectUpdate = {
        $set : post
    };
    const result = await userModel.findByIdAndUpdate(id,objectUpdate).exec();
   
    res.send(result);
});


module.exports = router ;
