// Masyvo sukūrimas
let students = ['John', 'Steve', 'Peter']
// Masyvo narių pasiekimas
console.log(students[0])
console.log(students[1])
console.log(students[2])


console.log("for ciklas")

for(let i = 0; i < students.length; i++) {
    console.log(students[i])
}

console.log("map")
students.map(student => {
    console.log(student)
})

console.log("for each")
students.forEach(student => {
    console.log(student)
})

console.log("while")
let n = 0
while(n < students.length) {
    console.log(students[n])
    n++
}

console.log("do while")
let m = 0
do {
    console.log(students[m])
    m++
} while (m < students.length)


console.log("for of")
for (let student of students){
    console.log(student)
}

let student = ['John', 'Doe', 12, 'Kaunas', 6, 'Palanga']
console.log(student[0])
console.log(student[3])
console.log(student[2])

/* 

Studentas 1:
  - Vardas: John,
  - Pavarde: Doe,
  - Amzius: 28,
  - Miestas: Vilnius,
  - Grupe: 13,
  - Gimtasis miestas: Kaunas.  

*/

/*

Objekto sintaksė:

let obj = {
  key: value,
}

*/

let studentObj = {
    name: 'John',
    surname: 'Doe',
    age: 12,
    city: 'Kaunas',
    group: 6,
    "birth city": 'Palanga',
    isActive: false,
    grades: [5, 8, 10, 4],
    adress: {
        city: 'Kaunas',
        street: 'Vytato g'
    },
    getFullName: function () {
        console.log(this)
        return `${this.name} ${this.surname}`
    },
    setStudentInactive: function () {
        this.isActive = false
    },
    setStudentActive: function () {
        this.isActive = true
    },
    switchStudentActivity () {
        // if (this.isActive) {
        //     this.isActive = false
        // } else {
        //     this.isActive = true
        // } 
        this.isActive = !this.isActive
    }, 
    addNewHobby (newHobby) {
        this.hobbies.push(newHobby)
        return this.hobbies
    }


}

// gauname obj reiksmes
console.log(studentObj)

console.log(studentObj['name'])
console.log(studentObj['surname'])
console.log(studentObj['age'])
console.log(studentObj['city'])
console.log(studentObj['group'])
console.log(studentObj['birth city'])
console.log(studentObj['isActive'])
console.log(studentObj['grades'])
console.log(studentObj['grades'][0])
console.log(studentObj['grades'][1])
console.log(studentObj['grades'][2])
console.log(studentObj['grades'][3])

studentObj['grades'].map(grade => {
    console.log(grade)
})

let grades = studentObj['grades']

grades.map(grade => {
    console.log(grade)
})

console.log(studentObj['adress'])

console.log(studentObj['adress']['city'])
console.log(studentObj['adress']['street'])

// dot notation

console.log(studentObj.name)
console.log(studentObj.surname)
console.log(studentObj.age)
console.log(studentObj.city)
console.log(studentObj.group)
console.log(studentObj["birth city"])
console.log(studentObj.isActive)
console.log(studentObj.grades[1])
console.log(studentObj.adress)
console.log(studentObj.adress.city)
console.log(studentObj.adress.street)

let propertyName = 'name'

console.log(studentObj[propertyName])


// Obj propertys keitimas

console.log(studentObj.age)

studentObj.age = 13

console.log(studentObj.age)

// Obj propertys sukurimas

studentObj.middleName = 'Rokas'

console.log(studentObj.middleName)

// Obj propertys istrinimas

console.log(studentObj["birth city"])

delete studentObj["birth city"]

console.log(studentObj["birth city"])


studentObj.hobbies = ['plaukimas', 'skiatymas']

// studentObj.contacts = {
//     phone: 865564646,
//     email: 'contact@email.com'
// }

// studentObj.contacts = {}
studentObj.contacts = new Object()
studentObj.contacts.phone = 86438349
studentObj.contacts.email = 'contact@email.com'


console.log(studentObj.getFullName())

console.log(studentObj)


console.log(studentObj.isActive)

studentObj.setStudentActive()

console.log(studentObj.isActive)

studentObj.setStudentInactive()

console.log(studentObj.isActive)


console.log(studentObj)

console.log(studentObj.addNewHobby('skraidymas'))
console.log(studentObj.addNewHobby('rasymas'))



studentObj.deleteHobby = function  (hobbyToRemove) {

    const newHobbies = this.hobbies.filter((hobby) => {
        return hobbyToRemove != hobby
    })
    this.hobbies = newHobbies
}

studentObj.deleteHobby('rasymas')
console.log(studentObj.hobbies)

// objektu kurimu budai

// 1 

const obj = {
    name: 'John',
    age: 10
}

console.log(obj)
console.log(obj.name)
console.log(obj.age)

// 2

// const obj2 = {}
const obj2 = new Object()
obj2.name = 'Tom'
obj2.age = 11


console.log(obj2)
console.log(obj2.name)
console.log(obj2.age)

// 3 - constructor function (pries ES6-ecma script6)

function Person(name, age) {
    this.name = name
    this.age = age
}

const person1 = new Person('john', 10)

console.log(person1)
console.log(person1.name)
console.log(person1.age)

const person2 = new Person('Tom', 12)

console.log(person2)
console.log(person2.name)
console.log(person2.age)

// 4 - Class (po ES6)

class Person2 {
    constructor(name, lastName, age) {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.fullName = `${name} ${lastName}`
        this.hobbies = []

    }
    
    getPersonInfo() {
        return `${this.name} is ${this.age} years old!`
    }

    addHobby(newHobby) {
        this.hobbies.push(newHobby)
        return this.hobbies
    }
    

}

const person3 = new Person2('John', 'Tom', 10)


console.log(person3)
console.log(person3.name)
console.log(person3.lastName)
console.log(person3.age)
console.log(person3.fullName)
console.log(person3.getPersonInfo())
console.log(person3.hobbies)
console.log(person3.addHobby('swimming'))
console.log(person3.hobbies)


const person4 = new Person2('Tod', 'Steave', 12)

console.log(person4.fullName)

console.log(person4.getPersonInfo())

class Client extends Person2 {
    constructor (name, lastName, age, isSubscribed) {
        super(name, lastName, age)
        // this.name = name
        // this.lastName = lastName
        // this.age = age
        this.isSubscribed = isSubscribed

    }
}

const client1 = new Client('Noah', 'Tom', 15, false)

console.log(client1)
console.log(client1.getPersonInfo())