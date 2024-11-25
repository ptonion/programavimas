let name1 = 'John'
const name2 = 'Tom'
var name3 = 'Steve'
// let age = 4

console.log(name1)

let people  = ['John', 'Tom', 'Steve', 'Tod']
let people2  = ['John', 'Tom', 'Steve', 'Tod']

console.log(people)
console.log(people[0])
console.log(people.slice(1, 3))
console.log(people.slice(1))
console.log(people.slice(-2))
console.log(people.slice(1, -1))



let combinedPeople = people + people2 //Taip js nesudesiu dvieju masyvu i viena
console.log(combinedPeople)

let combinedPeople2 = [...people, ...people2]
console.log(combinedPeople2)

let combinedPeople3 = people.concat(people2)
console.log(combinedPeople3)

console.log(combinedPeople3)

let combinedPeople4 = [...people.slice(1), ...people2.slice(2)]
console.log(combinedPeople4)

let cities1 = [
    ['Kaunas', 300000 ],
    ['Vilnius', 800000 ],
    ['Klaipeda', 120000 ],
]
let cities2 = [
    ['Kaunas2', 300000 ],
    ['Vilnius2', 800000 ],
    ['Klaipeda2', 120000 ],
]

let combinedCities = [...cities1.slice(1), ...cities2.slice(1)]
console.log(combinedCities)


let age = 18

if(age >= 18){
    console.log('adult')
}

if(age >= 18){
    console.log('adult')
} else {
    console.log('not adult')
}

if(age >= 18){
    console.log('adult')
} else if (age >= 13){
    console.log('teen')
} else {
    console.log('kid')
}


if (age >= 13 && age < 18){
    console.log('teen')
} else if (age >= 18 && age < 30){
    console.log('grownup')
} else if (age >= 30 && age < 66 ){
    console.log('adult')
}

age = 20

if (age == 30 || age == 20){
    console.log('jubiliejus')
}

let password = 'dawdwaew#f'

if (password.includes('#')){
    if (password.length > 15){
        console.log('tinkams')
    } else {
        console.log('netinkamas')
    }
} else {
    console.log('passwored must include #')
}

for(let i = 0; i < 5; i++){
    console.log(i)
}

for(let i = 0; i < people.length; i++){
    console.log(people[i])
}

for(let name of people){
    console.log(name)
}

let person = {
    name: 'Jonas',
    age: 10
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person['name'])
console.log(person['age'])

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

let keys = Object.keys(person)
let values = Object.values(person)
let entries = Object.entries(person)


for(let key of keys){
    console.log(key)
}
for(let value of values){
    console.log(value)
}
for(let entry of entries){
    console.log(entry)
    // let key = entry[0]
    // let value = entry[1]
    let [key, value] = entry 
    console.log(key, value)
}

for(let [key, value] of entries){
    console.log(key, value)
}


let convertedPeople = people.map((person)=>{
    return person + '!'
})

console.log(convertedPeople)

// let filteredNames = people.filter((person)=>{
//     console.log(person)
//     console.log(person.length)
//     console.log(person.length > 3)
//     return person.length > 3
// })

let filteredNames = people.filter(person => person.length > 3)

console.log(filteredNames)

let filteredNames2 = people.filter(person => person.length > 3).map(name => name + '!')

console.log(filteredNames2)