const router = require('express').Router()
const controllers = require('../controllers/userController')
router.post('/', controllers.login)
module.exports = router