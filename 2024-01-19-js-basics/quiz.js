let klsmSport1 = 'Krepsinis' // \"Labiausiai\" mylimas sportas Lietuvoje?
let klsmSport2 = '1999' // Kelintais metais Zalgiris laimejo eurolyga?
let klsmSport3 = 'Prancuzijoje' // Kur vyks 2024 Vasaros Olimpiada?
let klsmSport4 = 'Plaukima' // Koki sporta sportuoja R. Meilutyte?
let klsmSport5 = 'Krepsini' // Koki sporta sportuoja Domantas Sabonis?
let klsmSport6 = '2012' // Kelintais metais Ruta Meilutyte laimejo aukso medali olimpiadoje?
let klsmSport7 = 'Japonijoje' // Kur vyko 2020 Vasaros olimpiada?
let klsmMath1 = '4' // 2+2
let klsmMath2 = '4' // 2*2
let klsmMath3 = '5' // 10/2
let klsmMath4 = '100' // 10*10
let klsmMath5 = '55' // 11*5
let klsmMath6 = '100' // 65+35
let klsmMath7 = '2000' // 200*10
let klsmColors1 = 'Geltonos' // Kokios spalvos yra bananas?
let klsmColors2 = 'Baltos' // Kokios spalvos yra baltoji meska?
let klsmColors3 = 'Baltos' // Kokioks spalvos yra paprastas popieriaus lapas? 
let klsmColors4 = 'Raudonos' // Kokios spalvos dažnis yra mažiausias?
let klsmColors5 = 'Violetines' // Kokios spalvos dažnis yra didžiausias?
let klsmColors6 = 'Balta' // Kokia spalva labiausiai atspindi saule?
let klsmColors7 = 'Juoda' // Kokia spalva labiausiai sugeria saule?
let output1 = ''
let output2 = ''
let output3 = ''
let firstLevelPassed = false
let secondLevelPassed = false
let temaSport = false
let temaMath = false
let temaColors = false

let tema = prompt('Kokios tematikos klausimyno nori? (math, sport, colors), sekancius ats veskite is didziosios raides  ')
if (tema == 'math') {
    temaMath = true
} else if (tema == 'sport') {
    temaSport = true
} else if (tema == 'colors') {
    temaColors = true
}


if (temaColors) {
    let atsColors1 = prompt('Kokios spalvos yra bananas?')
    let atsColors2 = prompt('Kokios spalvos yra baltoji meska?')

    if (klsmColors1 == atsColors1 && klsmColors2 == atsColors2) {
        firstLevelPassed = true
        output1 = 'Patekai i kita lygi: abu atsakymai teisingi.'
    }else if (klsmColors1 == atsColors1) {
        firstLevelPassed = true
        output1 = 'Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.'
    } else if (klsmColors2 == atsColors2) {
        firstLevelPassed = true
        output1 = 'Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.'
    } else {
        output1 = 'Nepatekai i kita lygi: abu atsakymai buvo neteisingi.'
    }
} else if (temaMath) {
    let atsMath1 = prompt('2+2')
    let atsMath2 = prompt('2*2')

    if (klsmMath1 == atsMath1 && klsmMath2 == atsMath2) {
        firstLevelPassed = true
        output1 = 'Patekai i kita lygi: abu atsakymai teisingi.'
    } else if (klsmMath1 == atsMath1) {
        firstLevelPassed = true
        output1 = 'Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.'
    } else if (klsmMath2 == atsMath2) {
        firstLevelPassed = true
        output1 = 'Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.'
    } else {
        output1 = 'Nepatekai i kita lygi: abu atsakymai buvo neteisingi.'
    }
} else if (temaSport) {
    let atsSport1 = prompt('"Labiausiai" mylimas sportas Lietuvoje?')
    let atsSport2 = prompt('Kelintais metais Zalgiris laimejo eurolyga?')

    if (klsmSport1 == atsSport1 && klsmSport2 == atsSport2) {
        firstLevelPassed = true
        output1 = 'Patekai i kita lygi: abu atsakymai teisingi.'
    }else if (klsmSport1 == atsSport1) {
        firstLevelPassed = true
        output1 = 'Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.'
    } else if (klsmSport2 == atsSport2) {
        firstLevelPassed = true
        output1 = 'Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.'
    } else {
        output1 = 'Nepatekai i kita lygi: abu atsakymai buvo neteisingi.'
    }
} else {
    alert('Ivesti duomenys neteisingi')
}

alert(output1)

if (firstLevelPassed && temaColors) {
    let atsColors3 = prompt ('Kokioks spalvos yra paprastas popieriaus lapas?')
    let atsColors4 = prompt ('Kokios spalvos dažnis yra mažiausias?')
    if (atsColors3 == klsmColors3 && atsColors4 == klsmColors4) {
        secondLevelPassed = true
        output2 = 'Patekai i trecia lygi: abu atsakymai teisingi.'
}   else if (atsColors3 == klsmColors3) {
        output2 = 'Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.'
    }else if (atsColors4 == klsmColors4) {
        output2 = 'Nepatekai i kita lygi: antras atsakymas buvo teisingas, o pirmas buvo neteisingas.'
}   else {
        output2 = 'Nei vienas ats nebuvo teisingas'
}
} else if (firstLevelPassed && temaMath) {
    let atsMath3 = prompt ('10/2')
    let atsMath4 = prompt ('10*10')
    if (atsMath3 == klsmMath3 && atsMath4 == klsmMath4) {
        secondLevelPassed = true
        output2 = 'Patekai i trecia lygi: abu atsakymai teisingi.'
    }else if (atsMath3 == klsmMath3) {
        output2 = 'Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.'
    } else if (atsMath4 == klsmMath4) {
        output2 = 'Nepatekai i kita lygi: antras atsakymas buvo teisingas, o pirmas buvo neteisingas.'
    } else {
        output2 = 'Nei vienas ats nebuvo teisingas'
    }
} else if (firstLevelPassed && temaSport) {
    let atsSport3 = prompt ('Kur vyks 2024 Vasaros Olimpiada?')
    let atsSport4 = prompt ('Koki sporta sportuoja R. Meilutyte?')
    if (atsSport3 == klsmSport3 && atsSport4 == klsmSport4) {
        secondLevelPassed = true
        output2 = 'Patekai i trecia lygi: abu atsakymai teisingi.'
    }else if (atsSport3 == klsmSport3) {
        output2 = 'Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.'
    } else if (atsSport4 == klsmSport4) {
        output2 = 'Nepatekai i kita lygi: antras atsakymas buvo teisingas, o pirmas buvo neteisingas.'
    } else {
        output2 = 'Nei vienas ats nebuvo teisingas'
    }
}

alert(output2)


if (secondLevelPassed && temaColors) {
    let atsColors5 = prompt ('Kokios spalvos dažnis yra didžiausias?')
    let atsColors6 = prompt ('Kokia spalva labiausiai atspindi saule?')
    let atsColors7 = prompt ('Kokia spalva labiausiai sugeria saule?')
    if (atsColors5 == klsmColors5 && atsColors6 == klsmColors6 && atsColors7 == klsmColors7) {
        output3 = 'I vius atsakete teisingai, perejote i kita lygi'
    } else if (atsColors5 == klsmColors5 && atsColors6 == klsmColors6) {
        output3 = '1 ir 2 klausimai teisingi, o 3 ne, neperejote'
    } else if (atsColors5 == klsmColors5 && atsColors7 == klsmColors7) {
        output3 = '1 ir 3 klausimai teisingi, o 2 ne, neperejote' 
    } else if (atsColors6 == klsmColors6 && atsColors7 == klsmColors7) {
        output3 = '2 ir 3 klausimai teisingi, o 3 ne, neperejote'
    } else if (atsColors7 == klsmColors7) {
        output3 = '1 ir 2  klausimai neteisingi, o 3 teisingas, neperejote'
    } else if (atsColors5 == klsmColors5) {
        output3 = '1 ir 3  klausimai neteisingi, o 2 teisingas, neperejote'
    } else if (atsColors6 == klsmColors6) {
        output3 = '2 ir 3  klausimai neteisingi, o 2 teisingas, neperejote'
        } else {
        output3 = 'visi ats neteisingi'
        }
} else if (secondLevelPassed && temaMath) {
    let atsMath5 = prompt ('11*5')
    let atsMath6 = prompt ('65+35')
    let atsMath7 = prompt ('200*10')
    if (atsMath5 == klsmMath5 && atsMath6 == klsmMath6 && atsMath7 == klsmMath7) {
        output3 = 'I vius atsakete teisingai, perejote i kita lygi'
    } else if (atsMath5 == klsmMath5 && atsMath6 == klsmMath6) {
        output3 = '1 ir 2 klausimai teisingi, o 3 ne, neperejote'
    } else if (atsMath5 == klsmMath5 && atsMath7 == klsmMath7) {
        output3 = '1 ir 3 klausimai teisingi, o 2 ne, neperejote' 
    } else if (atsMath6 == klsmMath6 && atsMath7 == klsmMath7) {
        output3 = '2 ir 3 klausimai teisingi, o 3 ne, neperejote'
    } else if (atsMath7 == klsmMath7) {
        output3 = '1 ir 2  klausimai neteisingi, o 3 teisingas, neperejote'
    } else if (atsMath5 == klsmMath5) {
        output3 = '1 ir 3  klausimai neteisingi, o 2 teisingas, neperejote'
    } else if (atsMath6 == klsmMath6) {
        output3 = '2 ir 3  klausimai neteisingi, o 2 teisingas, neperejote'
        } else {
        output3 = 'visi ats neteisingi'
        }
}  else if (secondLevelPassed && temaSport) {
    let atsSport5 = prompt ('Koki sporta sportuoja Domantas Sabonis?')
    let atsSport6 = prompt ('Kelintais metais Ruta Meilutyte laimejo aukso medali olimpiadoje?')
    let atsSport7 = prompt ('Kur vyko 2020 Vasaros olimpiada?')
    if (atsSport5 == klsmSport5 && atsSport6 == klsmSport6 && atsSport7 == klsmSport7) {
        output3 = 'I vius atsakete teisingai, perejote i kita lygi'
    } else if (atsSport5 == klsmSport5 && atsSport6 == klsmSport6) {
        output3 = '1 ir 2 klausimai teisingi, o 3 ne, neperejote'
    } else if (atsSport5 == klsmSport5 && atsSport7 == klsmSport7) {
        output3 = '1 ir 3 klausimai teisingi, o 2 ne, neperejote' 
    } else if (atsSport6 == klsmSport6 && atsSport7 == klsmSport7) {
        output3 = '2 ir 3 klausimai teisingi, o 3 ne, neperejote'
    } else if (atsSport7 == klsmSport7) {
        output3 = '1 ir 2  klausimai neteisingi, o 3 teisingas, neperejote'
    } else if (atsSport5 == klsmSport5) {
        output3 = '1 ir 3  klausimai neteisingi, o 2 teisingas, neperejote'
    } else if (atsSport6 == klsmSport6) {
        output3 = '2 ir 3  klausimai neteisingi, o 2 teisingas, neperejote'
        } else {
        output3 = 'visi ats neteisingi'
        }
}

    alert(output3)
