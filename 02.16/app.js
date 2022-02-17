const express = require('express')
const path = require('path')
const app = express()

const indexRoute = require('./routes/index.js')
// 랜덤 함수 만들기

const randInd = function(arr) {
    return Math.floor(Math.random() * arr.length)
}

//메뉴 추천
const pick = () => {
    const food = ['돈까스','김밥','초밥','떡볶이','짬뽕','라면','칼국수','파스타']
    let ind = Math.floor(Math.random() * food.length)
    return food[ind]
}

app.get('/food',(req,res)=>{
    text = pick()
    res.send(`오늘 당신에게 추천드리는 메뉴는 바로 ${text}입니다.!`)
    
})

//MBTI
const mbti = ['INTJ - 용의주도한 전략가 (Architect)',
    '​INTP - 논리적인 사색가 (Logician)',
    'ENTJ - 대담한 ​통솔자 (Commander)',
    'ENTP - ​뜨거운 논쟁을 즐기는 변론가 (Debater)',
    'INFJ - 선의의 옹호자 (Advocate)',
    'INFP - ​열정적인 중재자 (Mediator)',
    'ENFJ - 정의로운 사회운동가 (Protagonist)',
    'ENFP - ​재기발랄한 활동가 (Campaigner)',
    'ISTJ - 청렴결백한 논리주의자 (Logistician)',
    'ISFJ - 용감한 수호자 (Defender)',
    'ESTJ - ​엄격한 관리자 (Executive)',
    'ESFJ - 사교적인 외교관 (Consul)',
    'ISTP - 만능 재주꾼 (Virtuoso)',
    'ISFP - ​호기심 많은 예술가 (Adventurer)',
    'ESTP - ​모험을 즐기는 사업가 (Entrepreneur)',
    'ESFP - 자유로운 영혼의 연예인 (Entertainer)']

const direction = ['동','서','남','북']
const reward = ['우정','사랑','돈','즐거움']

app.get('/lucky',(req,res) => {
    res.send(`<p></p>오늘 당신이 <font color = "blue">${direction[randInd(direction)]} </font>로 가신다면,<p>
     만날 귀인은 바로 <font color = purple>${mbti[randInd(mbti)]} </font>입니다.<p>
     그낭 당신에게 <font color = orange>${reward[randInd(reward)]}</font>을 선사할 것 입니다.`)
})

//pug
app.set('veiws',path.join(__dirname,'views'))
app.set('view engine','pug')

//mongo

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/nodejs",{
    useNewUrlParser : true
}).then (()=>{
    console.log("Connected to MongoDB...")
}).catch((err) => {
    console.log(err.message)
})

const UserSchema = new mongoose.Schema({
    name : String,
    age : Number,
    saveDate:{
        type : Date,
        default : Date.now
    }
})

const User = mongoose.model("User",UserSchema)

const me = new User({
    name : "ae rim",
    age : 25
})

me.save().then(()=>{
    console.log(me)
}).catch((err)=>{
    console.log("error",err)
})

// 기본
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