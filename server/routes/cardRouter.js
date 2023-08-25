const {Router} = require('express')
const router = Router()
const controller = require('../routes/cardController/cardController')

router.get(
    '/card',
    controller.getCard
)


module.exports = router