// UŽDUOTIS:
// Į konsole išvesti apskaičiuotus keturkampio perimetrus pagal šias kraštines:
// 1. 10 ilgis ir 10 plotis.
// 2. 10 ilgis ir 25 plotis.
// 3. 10 ilgis ir 30 plotis.
// 4. 10 ilgis ir 35 plotis.
// 5. 10 ilgis ir 40 plotis.
// 6. 10 ilgis ir 45 plotis.
// 7. 10 ilgis ir 50 plotis.
// 8. 10 ilgis ir 55 plotis.
// 9. 10 ilgis ir 60 plotis.
// 10. 10 ilgis ir 120 plotis.

// console.log('- perimetras: ' + (10 * 2 + 10 * 2) + '!')
// console.log('- perimetras: ' + (10 * 2 + 25 * 2) + '!')
// console.log('- perimetras: ' + (10 * 2 + 30 * 2) + '!')
// console.log('- perimetras: ' + (10 * 2 + 35 * 2) + '!')
// console.log('- perimetras: ' + (10 * 2 + 40 * 2) + '!')
// console.log('- perimetras: ' + (10 * 2 + 45 * 2) + '!')
// console.log('- perimetras: ' + (10 * 2 + 50 * 2) + '!')
// console.log('- perimetras: ' + (10 * 2 + 55 * 2) + '!')
// console.log('- perimetras: ' + (10 * 2 + 60 * 2) + '!')
// console.log('- perimetras: ' + (10 * 2 + 120 * 2) + '!')

// DRY - Don't Repeat Yourself

// FUNKCIJOS
// Funkcijos sukūrimas:
// 1. Iniciavimo žodelis (function)
// 2. Pavadinimas
// 3. Paprasti skliaustai () - funkcijos argumentams.
// 4. Riestiniai skliaustai {} - funkcijos apibrėžimas

function hello() {
    // console.log('Hello, John')
    // document.querySelector('h1').textContent = 'Hello, John'
    return 'Hello, Steve'
}

// Funkcijos iškvietimas
// 1. Funkcijos pavadinimas
// 2. Paprasti skliaustai ()

console.log(hello())
document.querySelector('h1').textContent = hello()

let helloText = hello() + '!'

console.log(helloText)



function helloWithName(firstName) {
    // if (firstName) {
    //     return `Hello ${firstName}`
    // } else {
    //     return 'Hello'
    // }
    if (firstName) {
        return `Hello ${firstName}`
    }
    return 'Hello'
}


console.log(helloWithName('Steve'))
document.querySelector('h2').textContent = helloWithName('Steve')

let helloText2 = '- ' + helloWithName('Tom') + '...'
console.log(helloText2)


function getPerimeter(ilgis, plotis) {
    let perimeter = ilgis * 2 + plotis * 2
    let output = '- Perimetras: ' + perimeter + '!'
    return output
}

console.log(getPerimeter(5, 10))
// getPerimeter(3, 4)
// getPerimeter(2, 6)
// getPerimeter(10, 14)
// getPerimeter(4, 12)


function checkLotteryTicket(personAge) {


    if (personAge >= 18) {
       return 'Gali pirkti loterijos bileta'
    }
    
    if (personAge >= 16) {
        return 'Gali pirkti su tevu sutikimu'
    } 
   
    return 'Esi per jaunas'
    

}

console.log(checkLotteryTicket(10))
console.log(checkLotteryTicket(17))

function login(userName, time) {


    let isLoggedIn = false
    let isBirthday = false
    

     if (isLoggedIn && isBirthday && userName === '' ) {
        if (time === undefined || time >= 25 || time < 0 ) {
            return 'Hello, and have a great birthday.'
        }
        if (time >= 19 || time <= 4 ) {
            return `Good Evening, and have a great birthday.`
        }
        if (time >= 13 ) {
            return 'Good Afternoon, and have a great birthday.' 
        }
        if (time >= 5 ) {
            return 'Good Morning, and have a great birthday.'
        }
    } if (isLoggedIn && isBirthday) {
        if (time === undefined || time >= 25 || time < 0 ) {
            return `Hello ${userName}, and have a great birthday.`
        }
        if (time >= 19 || time <= 4 ) {
            return `Good Evening ${userName}, and have a great birthday.`
        }
        if (time >= 13 ) {
            return `Good Afternoon ${userName}, and have a great birthday.`
        }
        if (time >= 5 ) {
            return `Good Morning ${userName}, and have a great birthday.`
        }
    }
    if (isLoggedIn && (time >= 25 || time < 0 || time === undefined)) {
        return `Hello ${userName}`
    }
    if ((isLoggedIn && time >= 19 ) || (isLoggedIn && time <= 4 )) {
        return 'Good Evening ' + userName 
    }
    if (isLoggedIn && time >= 13 ) {
        return 'Good Afternoon ' + userName 
    }
    if (isLoggedIn && time >= 5 ) {
        return 'Good Morning ' + userName 
    }
    if (time >= 25 || time < 0 || time === undefined) {
        return 'Hello'
    }
    if ((time >= 19) || (time <= 4 )) {
        return 'Good Evening' 
    }
    if (time >= 13 ) {
        return 'Good Afternoon' 
    }
    if (time >= 5 ) {
        return 'Good Morning'
    } 
}

console.log(login('Tom' , -10 ))

// 1. good morning / good evening / good afternoon / hello
// 2. , vardas / 'tuscias' 
// 3.  , and have a great birthday. // 'tuscias'


function getGreeting(time, isLoggedIn = false, userName = '', isBirthday = false) {
    let text = ''

    let greetingtext = ''

    if ((time < 5 && time >= 0 )|| time >= 19 && time < 24) {
        greetingtext = 'Good Evening'
    } else if (time >= 13) {
        greetingtext = 'Good Afternoon'
    } else if (time >= 5) {
        greetingtext = 'Good Morning'
    } else {
        greetingtext = 'Hello'
    }

    let nametext = (isLoggedIn &&  userName) ? ' ' + userName : ''

    let birthdaycomma = userName ? ',' : ''
    let birthdaytext = (isBirthday && isLoggedIn) ? birthdaycomma + ' and have a great birthday.' : ''

    text = greetingtext + nametext + birthdaytext

    return text
}

console.log(getGreeting(14))
console.log(getGreeting(13, true, 'Tod'))
console.log(getGreeting(13, true, 'John', true))

let num = 5

console.log(num)

function func(globalNum) {
    console.log(globalNum)
    let num = 10
    console.log(num)
    let num2 = 15
    console.log(num2)

    if (true){
        console.log(num)
        let num2 = 20
        console.log(num2)
    }
}

func(num)
