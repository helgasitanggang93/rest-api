const router = require('express').Router()
const employeeController = require('../controllers/userController')
router.post('/', employeeController.signUp)
module.exports = router
