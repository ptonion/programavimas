// Įprasta funkcija
function func1 () {
    return 2 + 2
}
console.log(func1())

// Įprasta funkcija su parametrais
console.log(func2(3, 2))

function func2 (num1, num2) {
    return num1 + num2
}

// Sukuriamas kintamasis ir jam, kaip reikšmė, priskiriama anoniminė funkcija

let func3 = function (num1, num2) {
    return num1 + num2
}
console.log(func3(3, 2))

// ARROW FUNCTION:
// 1. Sukurti kintamąjį
// 2. Priskirti reikšmę:
// 2.1. Paprasti skliaustai ()
// 2.2. Rodyklė =>
// 2.3. Riestiniai skliaustai {}

let arrowFunc1 = () => {
    return 3 * 3
}
console.log(arrowFunc1())

let arrowFunc2 = (num1, num2) => {
    return num1 * num2
}
console.log(arrowFunc2(4, 3))

let arrowFunc3 = (num) => {
    return num * num
}
console.log(arrowFunc3(4))

// Jeigu arrow funkcija turi vieną parametrą, tai galima nerašyti paprastų skliaustų. Jeigu neturi nei vieno parametro arba jų turi daugiau nei vieną, tai paprasti skliaustai yra būtini.

return num * num
let arrowFunc4 = num => {
}
console.log(arrowFunc4(4))

// Jeigu funkcijos veiksmas aprašomas vienoje eilutėje (arba funkciją grąžina reikšmę), tai galima nerašyti žodelio return ir riestinių skliaustų.

let arrowFunc5 = num => num * num

console.log(arrowFunc5(4))

let nums = [1, 14, 10, 5, 95, 12]


let nums2 = [1, 10, 100, 50, 950, 120]


let filterNums1 = nums.filter(function(num){
    return num > 10
})
console.log(filterNums1)

// let filterNums2 = nums.filter((num) => {
//     return num > 10
// })

let filterNums2 = nums.filter(num => num > 10)
console.log(filterNums2)

// function filterMoreThanOne(element, index, array){
//     console.log(element, index, array)
// }
let filterMoreThanOne = function (num) {
    return num > 10
}

let filterNums3 = nums.filter(filterMoreThanOne)
console.log("🚀 ~ filterNums3:", filterNums3)

let filterNums4 = nums2.filter(filterMoreThanOne)
console.log("🚀 ~ filterNums4:", filterNums4)

