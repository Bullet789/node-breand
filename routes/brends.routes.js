const { Router } = require('express')
const router = Router()
const brandsControllers = require('../controllers/brends.controllers')


router.get('/brands', brandsControllers.getbrands)
router.post('/brands', brandsControllers.postbrands)
router.delete('/brands', brandsControllers.deletebrands)


module.exports = router