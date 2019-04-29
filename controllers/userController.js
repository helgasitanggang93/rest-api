var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {Employee} = require('../models')
class ControllerUser {

   static signUp(req, res){
       Employee.create({
           username : req.body.username,
           password: req.body.password,
           role: req.body.role
       })
       .then(function (data) {
           res.json(data)
           
       })
       .catch(function () {
           res.json({
               msg : 'data fail'
           })
           
       })

   }

   static login(req, res){
       Employee.findOne({
           where : {
               username: req.body.username,
           }
       })
       .then(function (data) {
           if(!data){
               res.json({
                   msg: 'wrong username'
               })
           }else {
              bcrypt.compare(`${req.body.password}/\/`, data.password)
              .then(function (success) {
                  if(success){
                      const payload = {
                          id : data.id,
                          username: data.username,
                          role: data.role
                      }
                      jwt.sign(payload, process.env.SECRET, function (err, token) {
                          res.json(token)
                      })
                      
                  }else {
                      res.json({
                          msg : 'wrong password'
                      })
                  }
                  
              })
           }
           
       })

   }
    
}

module.exports = ControllerUser