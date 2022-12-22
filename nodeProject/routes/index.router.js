const express = require('express')
const controller = require('../controller/controller')
const router = express.Router()

router.get(
    '/test',
    controller
)

module.exports = router