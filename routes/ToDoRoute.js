const Router = require('express')

const router = Router()

router.length('/',(res, req) =>{
    res.json({message: "Hi There.."})

})

module.exports = router;