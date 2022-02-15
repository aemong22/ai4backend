// import { kor,eng,mat } from './grade.js'
// console.log(kor)
// console.log(eng)
// console.log(mat)

// import { grade } from './grade.js'

// console.log(grade)
// console.log(grade.kor)
// console.log(grade.eng)
// console.log(grade.mat)


const grade = require('./grade.js')
console.log(grade)
console.log(grade.kor)
console.log(grade.myfoo())

// ES6 : import / export => type = 모듈 추가
// Node.js : require/ exports 
// node.js에서 require와 exports 사용할려면 package.json에서 
// type = 모듈 삭제하기.
