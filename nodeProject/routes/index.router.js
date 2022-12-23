const express = require('express')
const controller = require('../controller/controller')
const router = express.Router()

router.get(
    '/commits',
    controller.getCommits
)

router.get(
    '/branches/:gitHubUser/:repoName',
    controller.getBranches
)
module.exports = router