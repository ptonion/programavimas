function humanToDogYears(zmogausMetai) {
    let dogYears = zmogausMetai * 7
    let output = `${zmogausMetai} žmogaus metai yra ${dogYears} šuns metai.`
    return output
}

console.log(humanToDogYears(4))



function timeForBooks(bookCount) {
    let daysPerBook = 365 / bookCount
    let output = `Norint perskaityti ${bookCount} knygų per metus, vienai knygai perskaityti turėsi ${daysPerBook} dienas.`
    return output
}

console.log(timeForBooks(6))




function daysToWeeks(daysW) {
    return `${daysW} dienos yra ${daysW / 7} savaitės`
}

console.log(daysToWeeks(35))



//Math.ceil apvalina i didesne puse
//Math.floor apvalina i mažesnę pusę
//Math.round apvalina

function daysToYears(daysY) {
    return `${daysY} dienos yra ${Math.round(365 / daysY)} metai. `
}
// nezinojau i kuria puse apvalint
console.log(daysToYears(655))



function yearsToHours(yearsH) {
    return `${yearsH} metai turi ${yearsH * 8760} valandas.`
}
console.log(yearsToHours(5))



function monthsToHours(monthsH) {
    return `${monthsH} mėnesiai turi ${730 * monthsH} valandas.`
}
console.log(monthsToHours(3))



function monthsToMinutes(MonthsM) {
    return `${MonthsM} mėnesiai turi ${43800 * MonthsM} minutes.`
}

console.log(monthsToMinutes(2))



function daysTo (day, format) {
if (format == 'minutes'){
    return `${day} dienos = ${day * 1440} minutes`
} else if (format == 'hours') {
    return `${day} dienos = ${day * 24} valandos`
} else if (format == 'weeks') {
    return `${day} dienos = ${(day / 7).toPrecision(2)} savaites`
} else if (format == 'months') {
    return `${day} dienos = ${(day / 30).toPrecision(2)} menesiu`
} else if (format == 'years') {
    return `${day} dienos = ${(day / 365).toPrecision(2)} metai`
}
}

console.log(daysTo(366, 'years'))






function divide(dalinys, daliklis) {
    if (dalinys % daliklis == 0 ) {
        return `${dalinys} dalinasi is ${daliklis}.`
    } else {
        return `Skaicius ${dalinys} nesidalina is ${daliklis}. Liekana yra ${dalinys % daliklis}.`
    }
}

console.log(divide(10, 5))

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function symbolss(tekstas) {
    if (tekstas.length % 2 == 0){
        return 'įvestas tekstas turi porini raidžių skaičių'
    } else {
        return 'įvestas tekstas turi neporini raidžių skaičių'
    }
}
console.log(symbolss('ssss'))



// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio.
// 11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".
 
// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.
 
// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio

//
 function letterFromWord(text, letter) {
    if (letter == 0 || !Number.isInteger(letter)) {
        return 'Nurodytas netinkamas raides skaicius, jis negali buti 0, privalo buti sveikasis skaicius ir negali buti tekstas.'
    }
    
    let strLength = text.length


    if (strLength < Math.abs(letter)) {
        if (letter > 0) {
            return `Tekstas "${text}" turi ${text.length} simbolius, o jūs nurodėte grąžinti ${letter}.`
        }
        return `Tekstas "${text}" turi ${text.length} simbolius, o jūs nurodėte grąžinti ${letter * -1} raide nuo galo.`
    }

    let letterIndex = letter - 1
    
    if (letter < 0) {
        letterIndex = letter
        return `Teksto "${text}" ${Math.abs(letter)} raidė nuo galo yra "${text.at(letter)}"`
    }

    let selectedLetter = text.at(letterIndex)
    
    
    return `Teksto "${text}" ${letter} raidė yra "${selectedLetter}"`
    
}

 console.log(letterFromWord('labass', -2))


//  1. Sukurti funkciją getLargerNumber:
//  •	Funkcija priima du parametrus - skaičius.
//  •	Funkcija turi palyginti kuris skaičius yra didesnis.
//  •	Funkciją grąžina didesnį skaičių tokiu formatu: „Tarp skaičių 5 ir 10 didesnis yra skaičius 10".
//  •	Jeigu skaičiai yra vienodi, tai teksto formatas turi būti „Skaičiai 5 ir 5 yra lygūs".
 


 function getLargerNumber(No1, No2) {
    if(No1 > No2) {
        return 'Tarp skaičių ' + No1 + ' ir ' + No2 + ' didesnis yra skaičius ' + No1
    }
    if(No2 > No1) {
        return 'Tarp skaičių ' + No1 + ' ir ' + No2 + ' didesnis yra skaičius ' + No2
    }
    return 'Skaičiai ' + No1 + ' ir ' + No2 + ' yra lygūs'
 }


 console.log(getLargerNumber(2, 2))



//  2. Sukurti funkciją getLargestNumber:
// •	Funkcija priima 5 parametrus - skaičius.
// •	Funkcija turi rasti didžiausią skaičių.
// •	Funkciją grąžina didžiausią skaičių tokiu formatu: „Tarp skaičių 5, 10, 4, -6 ir 13 didžiausias yra skaičius 13"


function getLargerNumber1(num1, num2) {
    if(num1 > num2) {

        return num1

    } 

    return num2

}

function getLargerNumber2(no1, no2, no3, no4, no5) {

    // let maxNo = no1

    // if (maxNo < no2) {
    //     maxNo = no2
    // }
    // if (maxNo < no3) {
    //     maxNo = no3
    // }
    // if (maxNo < no4) {
    //     maxNo = no4
    // }
    // if (maxNo < no5) {
    //     maxNo = no5
    // }
    
    let maxNo = getLargerNumber1(no1, no2)
    maxNo = getLargerNumber1(maxNo, no3)
    maxNo = getLargerNumber1(maxNo, no4)
    maxNo = getLargerNumber1(maxNo, no5)

    return `Tarp skaičių ${no1}, ${no2}, ${no3}, ${no4} ir ${no5} didžiausias yra skaičius ${maxNo}`
    
    // if(no1 > no2 && no1 > no3 && no1 > no4 && no1 > no5 ) {
    //     return `Tarp skaičių ${no1}, ${no2}, ${no3}, ${no4} ir ${no5} didžiausias yra skaičius ${no1}`
    // }
    // if(no2 > no1 && no2 > no3 && no2 > no4 && no2 > no5 ) {
    //     return `Tarp skaičių ${no1}, ${no2}, ${no3}, ${no4} ir ${no5} didžiausias yra skaičius ${no2}`
    // }
    // if(no3 > no1 && no3 > no2 && no3 > no4 && no3 > no5 ) {
    //     return `Tarp skaičių ${no1}, ${no2}, ${no3}, ${no4} ir ${no5} didžiausias yra skaičius ${no3}`
    // }
    // if(no4 > no1 && no4 > no2 && no4 > no3 && no4 > no5 ) {
    //     return `Tarp skaičių ${no1}, ${no2}, ${no3}, ${no4} ir ${no5} didžiausias yra skaičius ${no4}`
    // }
    // if(no5 > no1 && no5 > no2 && no5 > no3 && no5 > no4 ) {
    //     return `Tarp skaičių ${no1}, ${no2}, ${no3}, ${no4} ir ${no5} didžiausias yra skaičius ${no5}`
    // }
}

console.log(getLargerNumber2(3, 10, 9, 4, 2))