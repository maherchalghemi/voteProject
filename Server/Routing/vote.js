const router = require('express').Router();
const mongoose = require('mongoose');

const Vote = require("../Models/vote");
mongoose.connect('mongodb://localhost:27017/VoteDB');

const voteModel = mongoose.model('Votes', Vote);

router.get('/all', async (req, res) => {
    const result = await voteModel.find().exec();
    res.send(result);
});


router.post('/add', async (req, res) => {
    var post = req.body;
    console.log(post);

    const result = await voteModel.create(post);
    res.send(result);
   
});


router.get('/vote/:id', async (req, res) => {
    id = req.params.id;
    console.log(id);
    const result = await voteModel.findById(id).exec();
    res.send(result);
});


router.post('/update/:id', async (req, res) => {
    id = req.params.id;
    var post = req.body;
    var objectUpdate = {
        $set : post
    };
    const result = await voteModel.findByIdAndUpdate(id,objectUpdate).exec();
   
    res.send(result);
});

module.exports = router ;