const express = require('express')
const path = require('path')
const app = express()

const indexRoute = require('./routes/index.js')

app.use('/', indexRoute)


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, './index.html'))
})

// req : request(요청), 사용자의 브라우저 정보,사용자의 브라우ㅜ저 정보, 질문(주소창), 로그인 정보
// res : response(응답) : 사이트 내용 html , 정보 보내기!

app.get('/webtoon',(req,res) => {
    res.send("<h2>현재 중비중!</h2>")
})
app.get('/mbti',(req,res) => {
    res.send("<h2>ISTJ</h2>")
})

app.use((err,req,res,next) => {
    console.log(err)
    res.status(500).send(err.message)
} )
app.listen(3000, () => {
    console.log('3000번 포트에서 웹서버를 실행 중입니다...')
})