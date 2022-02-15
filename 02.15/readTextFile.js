const fs = require('fs')
console.log('프로그램 시작...')

// 동기식으로 읽어오기
let data = fs.readFileSync('./news.txt')
console.log(data.toString().slice(0,100))