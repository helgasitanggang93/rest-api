let { Todo} = require('../models')
function auth(req, res, next) {
    let id = req.params.id
    Todo.findOne({
        where : {
            id : id
        }
    })
    .then(function (data) {
        if(req.payload.id === data.userId){
            next()
        }else {
            res.status(401).json({
                msg: 'data not match'
            })
        }
        
    })
    .catch(function (err) {
        res.status(404).json({
            msg: 'dont have any data'
        })
        
    })

    
}

module.exports = auth