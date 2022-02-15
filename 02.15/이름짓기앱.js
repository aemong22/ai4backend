// npc 이름 짓기
//  게임 닉네임 정하기
//  한국어 예쁜 이름 짓기 앱
function randName(){
    const kname = ['현빈','민서','현준','수정','수민']
    let index = Math.floor(Math.random()*5)
    return kname[index]

}

// Math.floor() : 소수점 이하를 버림한다.
// Math.ceil() : 소수점 이하를 올림한다.
// Math.round() : 소수점 이하를 반올림한다.
// parseInt : 문자열을 정수로 변환한다.


const result = randName()
console.log(result)

console.log(randName())