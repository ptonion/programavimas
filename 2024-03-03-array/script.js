// masyvai

let numsArr = [5, 10, 500, -15, 37.3, 20 ]
// index       0   1   2    3    4       5

console.log(numsArr)
console.log(numsArr.length)

// masyvo nariu pasirinkimas
// console.log(numsArr[0])
// console.log(numsArr[1])
// console.log(numsArr[2])
// console.log(numsArr[3])
// console.log(numsArr[4])
// console.log(numsArr[5])

for (let i = 0; i < numsArr.length; i++) {
    console.log(numsArr[i])
}
for (let i = 0; i < numsArr.length; i++) {
    // if (numsArr[i] > 0) {
    //     console.log(numsArr[i] + ' yra didesnis uz 0')
    // }
    let num = numsArr[i]
    if (num > 0) {
        console.log(num + ' yra didesnis uz 0')
    }
}

let carBrands = ['Audi', 'Bentley', 'Bugatti', 'Lamborghini', 'Porche', 'Seat', 'Škoda', 'Volkswagen', 'Chevrolet', 'Cadillac', 'Tesla'] 


for (let i = 0; i < carBrands.length; i++) {
    
    switch (carBrands[i]) {

        case 'Audi':
        case 'Bentley':
        case 'Bugatti':
        case 'Lamborghini':
        case 'Porche':
        case 'Seat':
        case 'Škoda':
        case 'Volkswagen':
            console.log('Motininė kompanija ' + carBrands[i] + ' yra = Volkswagen Group')
            break

        case 'Chevrolet':
        case 'Cadillac':
            console.log('Motininė kompanija ' + carBrands[i] + ' yra = General Motors')
            break
        default:
            console.log(carBrands[i] + ' neturi priskirto gamintojo.')
            break
    }




    // if (carBrands[i] == 'Audi' ||) {
    //     console.log('Motininė kompanija ' + carBrands[i] + ' yra = Volkswagen Group')
    // } 

    // if (i<=7) {
    //     console.log('Motininė kompanija ' + carBrands[i] + ' yra = Volkswagen Group')
    // } 
    // if (i>7) {
    //     console.log('Motininė kompanija ' + carBrands[i] + ' yra = General Motors')
    // }

}
    
    




let swimmers = [
   ['LT = ', 'Rūta Meilutytė','Danas Rapšys'], 
   ['China = ', 'Sun Yang','Ye Shiwen', 'Zhang YufSei', 'Ning Zetao'], 
   ['USA = ', 'Michael Phelps','Ryan Lochte', 'Caeleb Dressel'] 
]



for (let i = 0; i < swimmers.length; i++) {
    let innerArr = swimmers[i]

    console.log(innerArr)
    for (let j = 0; j < innerArr.length; j++) {
        console.log(innerArr[j])
    }

    console.log(swimmers[i])
    for(let j = 0; j < swimmers[i].length; j++) {
        console.log(swimmers[i][j])
    }





}


// Masyvai / Arrays
let numsArray = [5, 500, -5, 57.5, 4543, 'du']
//  Indeksai     0   1    2   3      4     5


console.log(numsArray)
console.log(numsArray[0])
numsArray[0] = 100
console.log(numsArray)
numsArray[numsArray.length] = 20
console.log(numsArray)


let cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiaulia', 'Panevėžys'];
console.log(cities)

// pop, push, shift, unshift ir splice metodai modifikuoja (mutuoja) originalų masyvą.


// pop() metodas - pašalina paskutinį masyvo narį.
let lastCity = cities.pop()
console.log(lastCity)
cities.pop()

console.log(cities)
// shift() metodas - pašalina pirmą masyvo narį.

let firstCity = cities.shift()
console.log(firstCity)
cities.shift()
console.log(cities)

// push() metodas - prideda naują narį (narius) į masyvo pabaigą.

let updatedCitiesLength = cities.push('Palanga')
console.log(updatedCitiesLength)
console.log(cities)
cities.push('Nida')
cities.push('Druskininkai', 'Juodkrante')
console.log(cities)

// unshift() metodas - prideda naują narį (narius) į masyvo pradžią.

// SPLICE - modifikuoja (mutuoja) originalų masyvą
let nums = [  1  ,   2  ,   3  ,   4  ,   5  ,   6  ,   7  ,   10];
//         0     1      2      3      4      5      6      7     8
//        -8    -7     -6     -5     -4     -3     -2     -1

console.log(nums)

// let splicedNums = nums.splice(2)
// let splicedNums = nums.splice(0)
// let splicedNums = nums.splice(-1)
// let splicedNums = nums.splice(-5)
// let splicedNums = nums.splice(2, 1)
// let splicedNums = nums.splice(0, 1)
// let splicedNums = nums.splice(2, 3)
// let splicedNums = nums.splice(-3, 2)
// let splicedNums = nums.splice(5, 7)
// let splicedNums = nums.splice(2, 2, 2.5)
// let splicedNums = nums.splice(0, 1, 100)


let splicedNums = nums.splice(2, 0, 2.5, 2.8, 2.9)
console.log(splicedNums)
console.log(nums)

let countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Index              0          1         2          3         4         5
// Slice (+)     0           1         2         3         4          5        6
// Slice (-)    -6          -5        -4        -3        -2         -1        

// SLICE - nemutuoja (nemodifikuoja) originalaus masyvo
console.log('------------SLICE-------------')
console.log(countries)

let slicedCountries1 = countries.slice() 
console.log(slicedCountries1)
let slicedCountries2 = countries.slice(2) 
console.log(slicedCountries2)
let slicedCountries3 = countries.slice(0, 2) 
console.log(slicedCountries3)
let slicedCountries4 = countries.slice(2, 2) 
console.log(slicedCountries4)
let slicedCountries5 = countries.slice(2, 4) 
console.log(slicedCountries5)
let slicedCountries6 = countries.slice(-3) 
console.log(slicedCountries6)
let slicedCountries7 = countries.slice(-4, -2) 
console.log(slicedCountries7)
let slicedCountries8 = countries.slice(-4, 2) 
console.log(slicedCountries8)
let slicedCountries9 = countries.slice(-3, 2) 
console.log(slicedCountries9)
let slicedCountries10 = countries.slice(2, -2) 
console.log(slicedCountries10)
let slicedCountries11 = countries.slice(-2, 4) 
console.log(slicedCountries11)
let slicedCountries12 = countries.slice(4, 2) 
console.log(slicedCountries12)



// filter method

let originalsNums = [1, 2, 3, 4, 5, 8, 7, 10, 9]
console.log(originalsNums)

let filterNums1 = []

for (let i = 0; i < originalsNums.length; i++) {
    if (originalsNums[i] > 6) {
        filterNums1.push(originalsNums[i])
    }
}

console.log(filterNums1)

// let filterNums2 = originalsNums.filter(function(num, i, arr){
//     console.log(i, num, arr)
// })

let filterNums2 = originalsNums.filter(function(num){
    return num > 6
})

console.log(filterNums2)

let filterNums3 = originalsNums.filter(function(num){
    return num > 4 && num <= 8
})

console.log(filterNums3)

let filterNums4 = originalsNums.filter(function(num){
    if (num > 6) {
        return true
    } else {
        return false
    }
})

console.log(filterNums4)


// map ir forEach



let numbersArr = [5, 8, 10, 2]
console.log('for ciklas')
for (let i = 0; i < numbersArr.length; i++) {
    console.log(numbersArr[i])
}
console.log('while ciklas')

let m = 0

while (m < numbersArr.length){
    console.log(numbersArr[m])
    m++
}

console.log('do...while')

let n = 0

do {
    console.log(numbersArr[n])
    n++
} while (n < numbersArr.length)

console.log('for...in')

for (let num in numbersArr) {
    console.log(num)
}

// for num in numbersArr:
//     print(num)

console.log('map')

// numbersArr.map((num, i, arr) => {
//     console.log(i, num, arr)
// })

numbersArr.map(function(num){
    console.log(num)        
})

console.log('forEach')

numbersArr.forEach((num) => {
    console.log(num)
})

// map grazina reiksme, forEach negrazina reiksmes

// let numbersSquared = numbersArr.map((num) => {
//     return num * num
// })

let numbersSquared = numbersArr.map(num => num * num ).reverse()

console.log(numbersSquared)


let numbersSquared2 = numbersArr.forEach(num => num * num )

console.log(numbersSquared2)