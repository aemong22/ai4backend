const express = require('express')

const router = express.Router()

router.get('/',(req,res) =>{
    res.send('나의 서비스 첫 페이지 입니다.')
})

module.exports = router