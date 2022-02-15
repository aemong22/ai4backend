function sum(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

// 하나씩 정의 
exports.mul = mul;
exports.sum = sum;

// 한번에 정의
module.exports = {
    sum2:sum,
    mul2:mul
};
