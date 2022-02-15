const fs = require('fs')
console.log('시작.....')

//비동기식으로 읽어오기 
//실행할때마다 순서 다름
fs.readFile('./news.txt', (err,data) => {
    if(err){
        throw err;
        // = console.log('Error....')
    }
    console.log('1번째 읽어오기',data.toString())
 })

 fs.readFile('./news.txt', (err,data) => {
    if(err){
        throw err;
        // = console.log('Error....')
    }
    console.log('2번째 읽어오기',data.toString())
 })

 fs.readFile('./news.txt', (err,data) => {
    if(err){
        throw err;
        // = console.log('Error....')
    }
    console.log('3번째 읽어오기',data.toString())
 })