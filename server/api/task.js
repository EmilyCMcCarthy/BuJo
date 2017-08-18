'use strict';

const router = require('express').Router();
const {Task, Color} = require('../db/models');

module.exports = router;

//retreive all tasks for user and add .category and .color property to task
//get'/', add query string to url in thunk
router.get('/:userId', function (req, res, next) {
    let userId = req.params.userId
    Task.findAll({
        where: {userId},
        include: [{ all: true, nested: true }]
    })
    .then(task => res.json(task))
    .catch(next);

});



router.get('/:taskId', function (req, res, next) {
   Task.findById(req.params.taskId)
    .then(task => res.json(task))
    .catch(next);
});


router.post('/', function (req, res, next) {
   Task.create({
        name: req.body.name,
        userId: req.body.userId,
        categoryId: req.body.categoryId,
        status: req.body.status,
        date:req.body.date})
        .then(task => res.status(201).send(task))
        .catch(next);
});

router.put('/:taskId', (req, res, next) => {
    const id = req.params.taskId;
    Task.findById(id)
    .then(task => {

        return task.update(req.body)})
    .then(updated => {
       
        let updatedResponse = updated.dataValues;
        
        res.send({message: 'Updated sucessfully', updatedResponse})
    })
    .catch(next);
})



router.delete('/:taskId', function (req, res, next) {
    const id = req.params.taskId;

  Task.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
