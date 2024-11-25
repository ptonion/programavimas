
function combine(item1, item2){

    if(typeof item1 === 'string' || typeof item2 === 'string'){
        return item1 + ' ' + item2
        
    } else {
        return item1 + item2
    }
}
console.log(combine(33, '33'))
console.log(combine(33, 33))
console.log(combine(33, 'labas'))
console.log(combine('ate', 'labas'))


function sayResult(item1, item2, cb){
    let answer = cb(item1, item2)
    return `answer: ${answer}`

}

console.log(sayResult('labas', 2, combine))
console.log(sayResult(2, 5, add))
console.log(sayResult(2, 5, multiply))
console.log(sayResult(2, 5, substract))
console.log(sayResult(2, 5, function(num1, num2){
    return num1 * num1  + num2 ** 2
}))
console.log(sayResult(2, 5, square))
function square(num1, num2){
    return num1 * num1  + num2 ** 2
}

function add(num1, num2) {
    let answer = num1 + num2 
    return `${num1} + ${num2} = ${answer}`
}
function multiply(num1, num2) {
    let answer = num1 * num2 
    return `${num1} * ${num2} = ${answer}`
}
function substract(num1, num2) {
    let answer = num1 - num2 
    return `${num1} - ${num2} = ${answer}`
}

