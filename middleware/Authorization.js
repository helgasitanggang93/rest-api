let { Todo} = require('../models')
function auth(req, res, next) {
    let id = req.params.id
    Todo.findOne({
        where : {
            id : id
        }
    })
    .then(function (data) {
        if(req.payload.payload.id === data.userId){
            next()
        }else {
            res.json({
                msg: 'data not match'
            })
        }
        
    })
    .catch(function (err) {
        res.json({
            msg: 'dont have any data'
        })
        
    })

    
}

module.exports = auth