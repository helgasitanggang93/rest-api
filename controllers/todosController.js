const {Todo} = require('../models')

class ControllerTodos {

 static getTodo(req, res) {
        Todo.findAll({
            where : {
                userId : req.payload.id
            }
        })
        .then(function (data) {
            if(data.length === 0){
                res.json({
                    msg: 'data not found'
                })
                
            }else {
                res.json(data)

            }
            
        })
        .catch(function (err) {
            res.status(404).json({
                msg: 'data error'
            })
            
        })
    }

    static getOneTodo(req, res){
        let id = req.params.id
        Todo.findByPk(id)
        .then(function (data) {
            if(!data){
                res.status(200).json({
                    msg: 'data not found'
                })

            }else {
                res.json(data)
            }
            
        })
        .catch(function (err) {
            res.status(400).json({
                msg:'data fail'
            })
            
        })
    }

    static createTodo(req, res) {
        Todo.create({
            title : req.body.title,
            description : req.body.description,
        
        }, {idUser : req.payload.id})
        .then(function (data) {
            res.status(201).json(data)
        })
        .catch(function (err) {
            res.status(400).json({
                msg: 'create fail'
            })
            
        })
    }

    static updateTodo(req, res){
        let id = req.params.id
        let data = req.body
        Todo.update(data,{
            where : {
                id: id
            }
        })
        .then(function () {
            res.status(201).json(data)
        })
        .catch(function () {
            res.status(400).json({
                msg: 'update fail'

            })
            
        })
    }

    static deleteTodo(req, res){
        let id = req.params.id
        Todo.destroy({
            where : {
                id: id
            }
        })
        .then(function (data) {
            res.status(201).json(data)
            
        })
        .catch(function (err) {
            res.status(400).json({
                msg : 'delete fail'

            })
            
        })
    }
}

module.exports = ControllerTodos