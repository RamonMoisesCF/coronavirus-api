const express = require('express')
const router = express.Router()

let testController = require('../../controller/test/test.controller')
router.get('/example/', testController.exampleGetRequest)

module.exports = router