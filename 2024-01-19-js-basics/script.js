// Kintamojo sukūrimas:
// 1. Iniciavimo žodelis (var, let, const)
// 2. Kintamojo pavadinimas
// 3. Lygybės ženklas
// 4. Kintamojo vertė

var name = "John" // string(tekstas) tipo duomenys 
let surname = 'Doe' // string(tekstas) tipo duomenys
let city = `Kaunas` // string(tekstas) tipo duomenys
let isStudent = true // boolean (true/false) tipo duomenys
const personalCode = 37878787878 // number (skaicius) tipo duomenys
let age = 5 //  number (skaicius) tipo duomenys

console.log(name)
console.log(surname)
console.log(city)
console.log(isStudent)
console.log(personalCode)
console.log(age)

console.log(typeof name)
console.log(typeof surname)
console.log(typeof city)
console.log(typeof isStudent)
console.log(typeof personalCode)
console.log(typeof age)

age = 25


console.log(age)



console.log(name + " " + surname + ".")
console.log(name + ' ' + surname + '.')
console.log(`${name} ${surname}.`)

let sentence = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis distinctio voluptate placeat repellat libero adipisci praesentium quam, temporal.'

console.log(sentence)
console.log(sentence.length)
console.log(sentence[0])
console.log(sentence.charAt(0))
console.log(sentence.at(0))
console.log(sentence.at(-1))
console.log(sentence.toLowerCase())
console.log(sentence)
console.log(sentence.toUpperCase())
console.log(sentence.replace('o', '_'))
console.log(sentence.replaceAll('o', '_'))
console.log(sentence.toLowerCase().replaceAll('o', '_'))

//matematiniai operatoriai
let num1 = 22
let num2 = 10
let num3 = '10'

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 * num2)
console.log(num1 % num2)

console.log(num1 + num2 * num2)
console.log((num1 + num2) * num2)

console.log(num1 + num3)
console.log(num1 - num3)
console.log(num1 / num3)
console.log(num1 * num3)
console.log(num1 % num3)

console.log(num1 + num3 * num3)
console.log((num1 + num3) * num3)

// John Doe (amžius 25 m.), asmens kodas: 37878787878, gyvenamasis miestas: Kaunas.

// John said: "Good morning".
// John said: "That's my car".
// John `said`: "That's my car".
// John \`said\`: "That's my car".

console.log(name + ' ' + surname + ' (amžius ' + age + ' m.), asmens kodas: ' + personalCode + ', gyvenamasis miestas: ' + city + '.')
console.log(`${name} ${surname} (amžius ${age} m.), asmens kodas: ${personalCode}, gyvenamasis miestas: ${city}.`)

console.log(`John said: "Good morning".`)
console.log('John said: "Good morning".')
console.log("John said: \"Good morning\".")


console.log(`John said: "That's my car".`)
console.log("John said: \"That's my car\".")
console.log('John said: "That\'s my car".')


console.log("John `said`: \"That's my car\".")
console.log(`John \`said\`: "That's my car".`)
console.log('John `said`: "That\'s my car".')


console.log("John \\`said\\`: \"That's my car\".")
console.log('John \\`said\\`: "That\'s my car".')
console.log(`John \\\`said\\\`: "That's my car".`)

// conditions 
// Dviguba lygybė (loosely equal ==): tikrina TIK reikšmes ir nekreipia dėmesio į duomenų tipą.

console.log(10 == 10) //true
console.log('vienas' == 'vienas') //true
console.log('10' == '10') //true
console.log('10' == 10) //true

// Triguba lygybė (strictly qual ===): pirmiausiai tikrina ar sutampa duomenų tipai, o tada tikrina reikšmes.

console.log(10 === 10) //true
console.log('vienas' === 'vienas') //true
console.log('10' === '10') //true
console.log('10' === 10) //false

console.log(10 > 10) //false
console.log(10 < 10) //false
console.log(10 >= 10) //true
console.log(10 <= 10) //true

console.log(10 == 10) //true
console.log(10 != 10) //false
console.log(10 === 10) //true
console.log(10 !== 10) //false

console.log(true)
console.log(!true)
console.log(!!true)

// if, else if, else

// let light = 'blue'
// console.log(light)

//
function sviesoforas(light) {
    if (light == 'green') {
        return 'galima eiti'
    } else if (light == 'yellow') {
        return 'pasiruosk'
    } else if (light == 'red') {
        return 'STOP'
    } else {
        return 'sugedo'
    }
}

console.log(sviesoforas('red'))
// Amžius:
// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.4. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."


// let agePrompt = prompt ('Iveskite savo metus')
// let agePrompt = 5 
// let ageAsNumber = parseInt(agePrompt) // Is stringo i number
// console.log(typeof agePrompt)
// console.log(typeof ageAsNumber)


// console.log(agePrompt)
// console.log(ageAsNumber)
//

function school(ageAsNumber) {
    if (isNaN(ageAsNumber)) {
        return 'Ivesti duomenys privalo buti skaicius'
    } else if (ageAsNumber < 0) {
        return  'Įvestas amžius yra per mažas.'
    } else if (ageAsNumber >= 120) {
        return 'Įvestas amžius yra per didelis.'
    } else if (ageAsNumber < 6) {
        return 'Iki 6 metų į mokyklą neina.'
    } else if (ageAsNumber < 7) {
        return 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.'
    } else if (ageAsNumber < 10) {
        return '7-10 metų eina į pradinę klasę.'
    } else if (ageAsNumber < 11) {
        return 'Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.'
    } else if (ageAsNumber < 14) {
        return '11-14 metų eina į pagrindinę.'
    } else if (ageAsNumber < 15) {
        return 'Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.'
    } else if (ageAsNumber < 18) {
        return '15-18 metų eina į gimnaziją.'
    } else if (ageAsNumber < 19) {
        return 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.'
    } else  {
        return '19+ mokyklą baigė.'
    }
}

console.log(school(13))

// let test = prompt('iveskite skaiciu')
//  console.log(test)

let personAge = 18
if (personAge >= 18) {
    console.log('Gali pirkti loterijos bileta')
} else {
    console.log('Esi per jaunas')
}

if (personAge < 18) {
    console.log('Esi per jaunas')
} else {
    console.log('Gali pirkti loterijos bileta')
}

if (personAge > 17) {
    console.log('Gali pirkti loterijos bileta')
} else {
    console.log('Esi per jaunas')
}

if (personAge <= 17) {
    console.log('Esi per jaunas')
} else {
    console.log('Gali pirkti loterijos bileta')
}



if (personAge >= 18) {
    console.log('Gali pirkti loterijos bileta')
} else if (personAge >= 16) {
    console.log('Gali pirkti su tevu sutikimu')
}else {
    console.log('Esi per jaunas')
}

if (personAge < 16) {
    console.log('Esi per jaunas')
} else if (personAge < 18) {
    console.log('Gali pirkti su tevu sutikimu')
} else {
    console.log('Gali pirkti loterijos bileta')
}



if (personAge >= 18) {
    console.log('Gali pirkti loterijos bileta')
} else if (personAge < 16) {
    console.log('Esi per jaunas')
}else {
    console.log('Gali pirkti su tevu sutikimu')
}

if (personAge < 16) {
    console.log('Esi per jaunas')
} else if (personAge >= 18) {
    console.log('Gali pirkti loterijos bileta')
} else {
    console.log('Gali pirkti su tevu sutikimu')
}



if (personAge >= 18) {
    console.log('Gali pirkti loterijos bileta')
} else { 
    // if (personAge < 16) {
    //     console.log('Esi per jaunas')
    // } else {
    //     console.log('Gali pirkti su tevu sutikimu')
    // }


    if (personAge >= 16) {
        console.log('Gali pirkti su tevu sutikimu')
    } else {
        console.log('Esi per jaunas')
    }
}



if (personAge < 18) {    
     // if (personAge < 16) {
    //     console.log('Esi per jaunas')
    // } else {
    //     console.log('Gali pirkti su tevu sutikimu')
    // }


    if (personAge >= 16) {
        console.log('Gali pirkti su tevu sutikimu')
    } else {
        console.log('Esi per jaunas')
    }
} else {
    console.log('Gali pirkti loterijos bileta')
}


let word = 'tree'
let firstLetter = word[0]
let thirdtLetter = word[2]

console.log (firstLetter)
console.log (thirdtLetter)

if (firstLetter == 't') {
    if (thirdtLetter == 'e'){
        console.log('zodzio pirma raide yra t ir trecia raide yra e')
    } else {
        console.log ('zodzio pirma raide nera t, arba trecia raide nera e')

    }
} else {
    console.log ('zodzio pirma raide nera t, arba trecia raide nera e')
}


// and operator - &&

if (firstLetter == 't' && thirdtLetter == 'e') {
    console.log('zodzio pirma raide yra t ir trecia raide yra e')
} else {
    console.log ('zodzio pirma raide nera t, arba trecia raide nera e')
}

// UŽDUOTIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

// ANTRAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.
// TREČIAS LYGIS:  
// 1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
// 2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
// 3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.

// Pasisveikinimas
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning...".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti para



// Slaptažodis:
// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."
// 3. Jeigu slaptažodis neturi grotažymių (#), tai parašyti: „Slaptažodis privalo turėti grotažymes"



// UŽDUOTIS: sukurti galvosūkį su keletu klausimu
// PIRMAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

// 1. Patekai i kita lygi: abu atsakymai teisingi.
// 2. Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.
// 3. Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.
// 4. Nepatekai i kita lygi: abu atsakymai buvo neteisingi.

// let ats1 
// let ats2 
// let ats3 
// let ats4
// let ats5
// let ats6
// let ats7

// ANTRAS LYGIS:
// 1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
// 2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

// let ats1 = prompt ('3 + 3 = ?')
// let ats2 = prompt ('Kokios spalvos yra bananas?')

let ats1 = '6'
let ats2 = 's'
let klsm1 = 10 
let klsm2 = 'geltonos' 
let output1 = ''

if (ats1 == klsm1 && ats2 == klsm2) {
    output1 = 'Patekai i kita lygi: abu atsakymai teisingi.'
}else if (ats1 == klsm1) {
    output1 = 'Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.'
} else if (ats2 == klsm2) {
    output1 = 'Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.'
} else {
    output1 = 'Nepatekai i kita lygi: abu atsakymai buvo neteisingi.'
}

console.log(output1)

// if (ats1 == '6' && ats2 == 'geltonos') {
//     ats3 = prompt ('Kokios spalvos yra obuolys?')
//     ats4 = prompt ('4 + 5 =?')
//     if (ats3 == 'zalias' && ats4 == '9' ) {
//         console.log('Patekai i trecia lygi: abu atsakymai teisingi.')
//     } else if (ats3 == 'zalias' && ats4 != '9') {
//          console.log ('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
//     } else if (ats3 != 'zalias' && ats4 == '9') {
//         console.log ('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
//     }
// } 
// if (ats1 == '6' && ats2 != 'geltonos') {
//     ats3 = prompt ('Kokios spalvos yra obuolys?')
//     ats4 = prompt ('4 + 5 =?')
//     if (ats3 == 'zalias' && ats4 == '9' ) {
//         console.log('Patekai i trecia lygi: abu atsakymai teisingi.')
//     } else if (ats3 == 'zalias' && ats4 != '9') {
//          console.log ('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
//     } else if (ats3 != 'zalias' && ats4 == '9')
//         console.log ('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
// }
//  if (ats2 == 'geltonos' && ats1 != '6') {
//     ats3 = prompt ('Kokios spalvos yra obuolys?')
//     ats4 = prompt ('4 + 5 =?')
//     if (ats3 == 'zalias' && ats4 == '9' ) {
//         console.log('Patekai i trecia lygi: abu atsakymai teisingi.')
//     } else if (ats3 == 'zalias' && ats4 != '9') {
//         console.log ('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
//     } else if (ats3 != 'zalias' && ats4 == '9')
//         console.log ('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
// }



// if (ats3 == 'zalias' && ats4 == '9') {
//     ats5 = prompt ('Kokia spalvos yra baltoji meska?')
//     ats6 = prompt ('Kokia spalvos yra rudoji meska?')
//     ats7 = prompt ('10*10=?')
//     if (ats5 == 'baltos' && ats6 == 'rudos' && ats7 == '100') {
//         console.log ('I vius atsakete teisingai, perejote i kita lygi')
//     } else if (ats5 == 'baltos' && ats6 == 'rudos' && ats7 != '100') {
//         console.log('1 ir 2 klausimai teisingi, o 3 ne, neperejote')
//     } else if (ats5 == 'baltos' && ats6 != 'rudos' && ats7 == '100') {
//         console.log('1 ir 3 klausimai teisingi, o 2 ne, neperejote') 
//     } else if (ats5 != 'baltos' && ats6 == 'rudos' && ats7 == '100') {
//         console.log('2 ir 3 klausimai teisingi, o 3 ne, neperejote') 
//     } else if (ats5 != 'baltos' && ats6 != 'rudos' && ats7 == '100') {
//         console.log('1 ir 2  klausimai neteisingi, o 3 teisingas, neperejote') 
//     } else if (ats5 == 'baltos' && ats6 != 'rudos' && ats7 != '100') {
//         console.log('1 ir 3  klausimai neteisingi, o 2 teisingas, neperejote') 
//     } else if (ats5 == 'baltos' && ats6 == 'rudos' && ats7 == '100') {
//         console.log('2 ir 3  klausimai neteisingi, o 2 teisingas, neperejote') 
// }
// }


// Pasisveikinimas
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning...".
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
// 3.1. 5-12 val. „Good Morning"
// 3.2. 13-18 val. „Good Afternoon"
// 3.3. 19-4 val. „Good Evening"
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti para


// let isLoggedIn = true;
// let userName = 'Tod'
// let time = 16
// let isBirthday = true
// let text = ''

// if (time < 0 || time > 23) {
//     text = 'Hello '
// }else if (time <= 4 || time >= 19) {
//     text = 'Good Evening'
// } else if (time >= 13) {
//     text = 'Good Afternoon'
// } else if (time >= 5) {
//     text = 'Good Morning'
// }


// if (isLoggedIn) {
//     text += ' ' + userName 
// }

// if (isBirthday) {
//    text += ', and have a great birthday'
// }

// console.log(text)


let isLoggedIn = true;
let userName = ''
let time = 4.5
let isBirthday = true
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

// pirmas budas

// let nametext = ''
// if (isLoggedIn &&  userName) {
//     nametext = ' ' + userName 
// }

// antras budas

// let nametext 
// if (isLoggedIn &&  userName) {
//     nametext = ' ' + userName 
// } else {
//     nametext = ''
// }

// trecias budas - terner operators

let nametext = (isLoggedIn &&  userName) ? ' ' + userName : ''

// let birthdaytext = ''

// if (isBirthday && isLoggedIn) {
//    birthdaytext = ', and have a great birthday.'
// }

// let birthdaytext = (isBirthday && isLoggedIn) ? ', and have a great birthday.' : ''

// let birthdaytext = (isBirthday && isLoggedIn) ? userName ? ', and have a great birthday.': ' and have a great birthday.' : ''

let birthdaycomma = userName ? ',' : ''
let birthdaytext = (isBirthday && isLoggedIn) ? birthdaycomma + ' and have a great birthday.' : ''

text = greetingtext + nametext + birthdaytext

console.log(text)






// if (isLoggedIn == true && isBirthday == true && time >= 19 ) {
//     console.log(`Good Evening ${userName}, and have a great birthday`)
// } else if (isLoggedIn == true && isBirthday == true && time <= 4 ) {
//     console.log('Good Evening', userName,  time )
// } else if (isLoggedIn == true && isBirthday == true && time >= 13 ) {
//     console.log('Good Afternoon', userName,  time )
// } else if (isLoggedIn == true && isBirthday == true && time >= 5 ) {
//     console.log('Good Morning', userName,  time )
// } else if (isLoggedIn == false && isBirthday == false && time >= 19 ) {
//     console.log('Good Evening' )
// } else if (isLoggedIn == false && isBirthday == false && time <= 4 ) {
//     console.log('Good Evening' )
// } else if (isLoggedIn == false && isBirthday == false && time >= 13 ) {
//     console.log('Good Afternoon' )
//  } else if (isLoggedIn == false && isBirthday == false && time >= 5 ) {
//     console.log('Good Morning' )
// }  else if (isLoggedIn == true && isBirthday == false && time >= 19 ) {
//     console.log('Good Evening ', userName )
// } else if (isLoggedIn == true && isBirthday == false && time <= 4 ) {
//     console.log('Good Evening ', userName )
// } else if (isLoggedIn == true && isBirthday == false && time >= 13 ) {
//     console.log('Good Afternoon', userName )
//  } else if (isLoggedIn == true && isBirthday == false && time >= 5 ) {
//     console.log('Good Morning',  userName )
//  }




// let pass = prompt ('Iveskite slaptazodi')
// let pass = '                               sah#              '.trimStart().trimEnd()
// let pass = '                               sah#              '.trim()


// if (!pass.includes('#')){
//     console.log('Slaptažodis privalo turėti grotažymes')
// } else {

//     if ( pass.length < 16 ) {
//         console.log('Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.')
//     } else {
//         if (pass.length > 20) {
//             console.log('Slaptažodis tinkamas')
//         } else {
//             console.log('Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.')
//         }
//     }

// }

//

function pass(passw) {
    if (!passw.includes('#')){
        return 'Slaptažodis privalo turėti grotažymes'

    } else if (passw.length < 16 ) {
        return 'Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.'
    } else if (passw.length < 21) {
        return 'Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.'
    } else {
        return 'Slaptažodis tinkamas'
    }
}

console.log(pass('dwdwaf#'))
