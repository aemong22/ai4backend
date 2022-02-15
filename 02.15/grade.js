// 학생 성적
// export const kor = 90
// export const eng = 60
// export const mat = 70

// export const grade = {
//     kor: 90,
//     eng: 60,
//     mat: 70
// }


//node.js 보내기
const kor = 90
exports.kor = kor
exports.eng = 60
exports.mat = 70

// 함수 넘기고 받기
exports.myfoo = function() {
    console.log("좋아해..")
}