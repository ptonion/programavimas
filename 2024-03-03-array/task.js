// Dirbti su šiuo masyvu:

let task = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.
console.log(task)

// 1.1. Pašalinti pirmą masyvo narį.
let fOut = task.shift()
console.log(fOut)
console.log(task)

// 1.2. Pašalinti paskutinį masyvo narį.
let lOut = task.pop()
console.log(lOut)
console.log(task)

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
let nr1 = Math.floor(task.length / 2)
console.log('----------')
console.log(nr1)
// let first = task[nr1]
// console.log(task[nr1])
let mOut = task.splice(nr1, 1)
console.log(mOut)
console.log(task)
// 1.4. Pašalinti priešpaskutinį masyvo narį.
let l2Out = task.splice(18, 1)
console.log(l2Out)
console.log(task)
// 1.5. Pašalinti antrą masyvo narį.
let f2out = task.splice(1, 1)
console.log(f2out)
console.log(task)
// 1.6. Pašalinti 7 ir 8 masyvo narius.
let out2 = task.splice(6, 2)
console.log(out2)
console.log(task)
// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
let out3 = task.splice(-6, 3)
console.log(out3)
console.log(task)
// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
let out3put1 = task.splice(2, 1, 888)
console.log(out3put1)
console.log(task)
// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
let out10put3 = task.splice(9, 1, 33, 789, 6543)
console.log(out10put3)
console.log(task)
// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
let out15put3 = task.splice(14, 1, 321, 654, 987)
console.log(out15put3)
console.log(task)
// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
let out1put1 = task.splice(1, null, 11)
console.log(out15put3)
console.log(task)
// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
let out13put1 = task.splice(13, null, 1)
console.log(out13put1)
console.log(task)
// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
let put1 = task.splice(18, null, -1)
console.log(put1)
console.log(task)
// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
let put3 = task.splice(0, null, 1, 2, 3)
console.log(put3)
console.log(task)
// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
let putB3 = task.splice(23, null, -333, -321, -312)
console.log(putB3)
console.log(task)
// 1.16. Į masyvo vidurį pridėti skaičių 0.
let putM1 = task.splice(13, null, 0)
console.log(putB3)
console.log(task)
// 1.17. Pašalinti pirmą masyvo narį.
let f2Out = task.shift()
console.log(f2Out)
console.log(task)
// 1.18. Pašalinti paskutinį masyvo narį.
let l0Out = task.pop()
console.log(l0Out)
console.log(task)
// 1.19. Į masyvo pradžią pridėti žodį "start".
let start = task.splice(0, null, 'start')
console.log(start)
console.log(task)
// 1.20. Į masyvo pabaigą pridėti žodį "end".
let end = task.splice(26, null, 'end')
console.log(end)
console.log(task)
// Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
// ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']

console.log(['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'])

function checkIfCorrect (taskArray, answer) {
    let taskJson = JSON.stringify(taskArray)
    let answerJson = JSON.stringify(answer)
    // console.log(JSON.parse(taskJson))    
    if (taskJson === answerJson) {
        console.log('correct')
    } else {
        console.log('incorrect')
    }

}

checkIfCorrect(task, ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'])


function checkIfCorrect2 (taskArray, answer) {

    if (taskArray.length != answer.length) {
        console.log('incorrect')
        return
    }
    for (let i = 0; i < taskArray.length; i++) {
        let answerItem = answer[i]
        let taskItem = taskArray[i]
        if (answerItem != taskItem) {
            console.log('incorrect')
            return
        }
    }

    console.log('correct')

}

checkIfCorrect2(task, ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'])

// 2. Tęsiant darbą su šiuo masyvu atlikti šias užduotis naudojant slice metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina slice metodas, ir šį kintamąjį išvesti į konsolę:

// 2.1. Gauti pirmą masyvo narį.
let slFirst = task.slice(0, 1)
console.log(slFirst)
// 2.2. Gauti paskutinį masyvo narį.
let slLast = task.slice(26)
console.log(slLast)
// 2.3. Gauti antrą masyvo narį.
let slSecond = task.slice(1, 2)
console.log(slSecond)
// 2.4. Gauti priešpaskutinį masyvo narį.
let slLast2 = task.slice(25, 26)
console.log(slLast2)
// 2.5. Gauti aštuntą masyvo narį.
let sl8 = task.slice(7, 8)
console.log(sl8)
// 2.6. Gauti devintą masyvo narį skaičiuojant nuo galo.
let slMinus9 = task.slice(-9, -8)
console.log(slMinus9)
// 2.7. Gauti vidurinį masyvo narį.+++++++++++++++++++++
let nr = Math.floor(task.length / 2)
let slMid = task.slice(nr, nr + 1)
console.log(slMid)
// 2.8. Gauti pirmus tris masyvo narius.
let slF3 = task.slice(0, 3)
console.log(slF3)
// 2.9. Gauti paskutinius tris masyvo narius.
let slL3 = task.slice(24)
console.log(slL3)
// 2.10. Gauti pirmus 10 masyvo narius.
let slF10 = task.slice(0, 10)
console.log(slF10)
// 2.11. Gauti paskutinius 10 masyvo narius.
let slL10 = task.slice(-10)
console.log(slL10)
// 2.12. Gauti nuo 3 iki 8 masyvo nario (iš viso 6 nariai).
let sl28 = task.slice(2, 8)
console.log(sl28)
// Gauti nuo 5 iki 9 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 5 nariai).
let slB59 = task.slice(-22, -17)
console.log(slB59)
// 2.14. Gauti nuo 11 iki 19 masyvo nario (iš viso 9 nariai).
let sl1119 = task.slice(10, 19)
console.log(sl1119)
// 2.15. Gauti nuo 9 iki 17 masyvo nario skaičiuojant nuo masyvo pabaigos (iš viso 9 nariai).
let slB917 = task.slice(-19, -10)
console.log(slB917)
// 2.16. Gauti visus masyvo narius išskyrus pirmą.
let slAll26 = task.slice(1)
console.log(slAll26)
// 2.17. Gauti visus masyvo narius išskyrus paskutinį.
let slAll262 = task.slice(0, 26)
console.log(slAll262)
// 2.18. Gauti visus masyvo narius išskyrus pirmus 5.
let sl527 = task.slice(5, 27)
console.log(sl527)
// Gauti visus masyvo narius išskyrus paskutinius 5.
let sl022 = task.slice(0, 22)
console.log(sl022)
// 2.20. Gauti visus masyvo narius iki vidurinio masyvo nario, vidurinio nario neįskaičiuojant (iš viso 13 narių).
let sl013 = task.slice(0, 13)
console.log(sl013)
// 2.21. Gauti visus masyvo narius nuo vidurinio masyvo nario, vidurinio nario neįskaičiuojant, iki pabaigos (iš viso 13 narių).
let sl1427 = task.slice(14)
console.log(sl1427)
// Gauti visus narius išskyrus pirmą ir paskutinį.
let sl126 = task.slice(1, 26)
console.log(sl126)
// 2.23. Gauti visus narius išskyrus pirmus penkis ir paskutinius tris.
let sl524 = task.slice(4, 23)
console.log(sl524)
// 2.24. Gauti visus narius išskyrus pirmą ir paskutinius 8.
let sl117 = task.slice(1, 19)
console.log(sl117)
// 2.25. Gauti visus narius išskyrus pirmus 7 ir paskutinį.
let sl727 = task.slice(7, 26)
console.log(sl727)
// 2.26. Gauti visus narius išskyrus pirmus 9 ir paskutinius 12.
let sl915 = task.slice(9, 15)
console.log(sl915)
// 2.27. Gauti 9 narius skaičiuojant nuo 11.
let sl1019 = task.slice(10, 19)
console.log(sl1019)
// 2.28. Gauti 12 narių skaičiuojant nuo 8.
let sl719 = task.slice(7, 19)
console.log(sl719)
// 2.29. Gauti pirmus penkis ir paskutinius šešis masyvo narius. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let slFirstpart = task.slice(0, 5)
console.log(slFirstpart)
let slSecondpart = task.slice(21)
console.log(slSecondpart)
// let answer = slFirstpart.concat(slSecondpart)
// let answer = [slFirstpart, slSecondpart].flat()
let answer = [...slFirstpart, ...slSecondpart]
console.log(answer)
// 2.30. Gauti masyvo narius nuo 3 iki 5 ir nuo 15 iki 17. Šiuos narius gauti viename masyve. Reikės atlikti daugiau veiksmų nei prieš tai uždaviniuose.
let slFirstpart1 = task.slice(2, 5)
console.log(slFirstpart1)
let slSecondpart2 = task.slice(14, 17)
console.log(slSecondpart2)
console.log(slFirstpart1.concat(slSecondpart2))


// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:

// 3.1. Gauti tik teigiamus skaičius.

let t1 = task.filter(function(num){
    return num > 0
})

console.log(t1)

// 3.2. Gauti tik neigiamus skaičius.

let t2 = task.filter(function(num){
    return num < 0
})

console.log(t2)

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.

let t3 = task.filter(function(num){
    return num % 2 == 0
})

console.log(t3)

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.

let t4 = task.filter(function(num){
    return num % 3 == 0
})

console.log(t4)

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.

let t5 = task.filter(function(num){
    return num % 5 == 0
})

console.log(t5)

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.

let t6 = task.filter(function(num){
    return num % 11 == 0
})

console.log(t6)

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.

let t7 = task.filter(function(num){
    return num % 31 == 0
})

console.log(t7)

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.

let t8 = task.filter(function(num){
    return num % 2 == 0 && num % 3 == 0
})

console.log(t8)

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.

let t9 = task.filter(function(num){
    return num % 3 == 0 && num % 7 == 0
})

console.log(t9)

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.

let t10 = task.filter(function(num){
    return num % 5 == 0 && num % 9 == 0
})

console.log(t10)

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.

let t11 = task.filter(function(num){
    return num % 5 == 0 && num % 11 == 0
})

console.log(t11)

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.

let t12 = task.filter(function(num){
    return num % 2 == 0 && num % 8 == 0 && num % 12 == 0
})

console.log(t12)

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.

let t13 = task.filter(function(num){
    return num % 2 == 0 || num % 3 == 0
})

console.log(t13)

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.

let t14 = task.filter(function(num){
    return num % 3 == 0 || num % 5 == 0
})

console.log(t14)

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.

let t15 = task.filter(function(num){
    return num % 5 == 0 || num % 6 == 0
})

console.log(t15)

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.

let t16 = task.filter(function(num){
    return num % 7 == 0 || num % 8 == 0
})

console.log(t16)

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.

let t17 = task.filter(function(num){
    return num % 9 == 0 || num % 13 == 0
})

console.log(t17)

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.

let t18 = task.filter(function(num){
    return (num % 2 == 0 && num % 3 == 0) || num % 5 == 0
})

console.log(t18)

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.

let t19 = task.filter(function(num){
    return (num % 5 == 0 && num % 7 == 0) || num % 9 == 0
})

console.log(t19)

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.

let t20 = task.filter(function(num){
    return (num % 7 == 0 && num % 8 == 0) || num % 11 == 0
})

console.log(t20)

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.

let t21 = task.filter(function(num){
    return (num % 9 == 0 && num % 12 == 0) || num % 13 == 0
})

console.log(t21)

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.

let t22 = task.filter(function(num){
    return num > 100
})

console.log(t22)

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.

let t23 = task.filter(function(num){
    return num > 555
})

console.log(t23)

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.

let t24 = task.filter(function(num){
    return num >= 888 
})

console.log(t24)

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.

let t25 = task.filter(function(num){
    return num >= 6789 
})

console.log(t25)

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.

let t26 = task.filter(function(num){
    return num < 50 
})

console.log(t26)

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.

let t27 = task.filter(function(num){
    return num < 1000 
})

console.log(t27)

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.

let t28 = task.filter(function(num){
    return num <= -1 
})

console.log(t28)

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.

let t29 = task.filter(function(num){
    return num <= -5564 
})

console.log(t29)

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.

let t30 = task.filter(function(num){
    return num < 1000 && num > 500 
})

console.log(t30)

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.

let t31 = task.filter(function(num){
    return num < 100 && num > 0 
})

console.log(t31)

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.

let t32 = task.filter(function(num){
    return num < 0 && num > -50 
})

console.log(t32)

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.

let t33 = task.filter(function(num){
    return num <= 0 && num > -100 
})

console.log(t33)

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.

let t34 = task.filter(function(num){
    return num >= 0 && num < 55 
})

console.log(t34)

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.

let t35 = task.filter(function(num){
    return num >= 444 && num <= 654 
})

console.log(t35)

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.

let t36 = task.filter(function(num){
    return num > 0 && num % 2 == 0 
})

console.log(t36)

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.

let t37 = task.filter(function(num){
    return num > 0 && num % 3 == 0 
})

console.log(t37)

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.

let t38 = task.filter(function(num){
    return num < 0 && num % 4 == 0 
})

console.log(t38)

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.

let t39 = task.filter(function(num){
    return num < 0 && num % 111 == 0 
})

console.log(t39)

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.

let t40 = task.filter(function(num){
    return num > 555 && num % 2 == 0 
})

console.log(t40)

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.

let t41 = task.filter(function(num){
    return num > 1000 && num % 3 == 0 
})

console.log(t41)

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.

let t42 = task.filter(function(num){
    return num < 1000 && num % 9 == 0 
})

console.log(t42)

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.

let t43 = task.filter(function(num){
    return num < 500 && num % 2 == 0 
})

console.log(t43)

// 3.44. Gauti tik skaicius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.

let t44 = task.filter(function(num){
    return num >= 33 && num % 3 == 0 
})

console.log(t44)

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.

let t45 = task.filter(function(num){
    return num >= 444 && num % 12 == 0 
})

console.log(t45)

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.

let t46 = task.filter(function(num){
    return num <= 155 && num % 5 == 0 
})

console.log(t46)

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.

let t47 = task.filter(function(num){
    return num <= -333 && num % 9 == 0 
})

console.log(t47)

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.

let t48 = task.filter(function(num){
    return num > 100 && num < 500 && num % 5 == 0 
})

console.log(t48)

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.

let t49 = task.filter(function(num){
    return num >= 888 && num < 1000 && num % 2 == 0 
})

console.log(t49)

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.

let t50 = task.filter(function(num){
    return num <= 888 && num >= -333 && num % 3 == 0 
})

console.log(t50)

// 3.51. Gauti tik skaičius.

let t51 = task.filter(function(num){
    return typeof num == 'number'
})

console.log(t51)

// 3.52. Gauti tik tekstus (string).

let t52 = task.filter(function(num){
    return typeof num == 'string'
})

console.log(t52)

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.

let t53 = task.filter(function(num){
    return typeof num == 'string' && num.length > 5
})

console.log(t53)

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.

let t54 = task.filter(function(num){
    if (typeof num == 'string' && num.length <= 5) {
        return num
    }
})

console.log(t54)

// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.

let t55 = task.filter(function(num){
    if (typeof num == 'string' && num.length < 7) {
        return num
    }
})

console.log(t55)

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.

let t56 = task.filter(function(num){
    if (typeof num == 'string' && num.includes('t')) {
        return num
    }
})

console.log(t56)

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.

let t57 = task.filter(function(num){
    if (typeof num == 'string' && num.includes('y')) {
        return num
    }
})

console.log(t57)

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.

let t58 = task.filter(function(num){
    if (typeof num == 'string' && (num.includes('e') || num.includes('a'))) {
        return num
    }
})

console.log(t58)

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.

let t59 = task.filter(function(num){
    if (typeof num == 'string' && (num.includes('t') && num.includes('i'))) {
        return num
    }
})

console.log(t59)

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.

let t60 = task.filter(function(num){
    if (typeof num == 'string' && num.includes('t') && !num.includes('k')) {
        return num
    }
})

console.log(t60)

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.

let t61 = task.filter(function(num){
    if (typeof num == 'string' && (num.includes('a') && !num.includes('s'))) {
        return num
    }
})

console.log(t61)

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.
// daug su regex pavyzdziu duoda.
// Kakzkaip per sunkiai galvojau, pamirsau, kad galima dar kieki prirasyt
let t62 = task.filter(function(num){
    if (typeof num == 'string' && num.includes('t', 1000 > 1)) {
        return num
    }
})
// Vis vien sitas 1000 > 1 kitaip turetu atrodyt
console.log(t62)


// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.

let t63 = task.filter(function(num){
    if (typeof num == 'string' && num.includes('st')) {
        return num
    }
})

console.log(t63)

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.

let t64 = task.filter(function(num){
    if (typeof num == 'string' && num.includes('nd')) {
        return num
    }
})

console.log(t64)

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.

let t65 = task.filter(function(num){
    if (typeof num == 'string' && !num.includes('s')) {
        return num
    }
})

console.log(t65)

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.

let t66 = task.filter(function(num){
    if (typeof num == 'string' && !num.includes('t')) {
        return num
    }
})

console.log(t66)

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.

let t67 = task.filter(function(num){
    if (typeof num == 'string' && !num.includes('r') && !num.includes('l')) {
        return num
    }
})

console.log(t67)

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.

let t68 = task.filter(function(num){
    if (typeof num == 'string' && !isNaN(num.charAt(0))) {
        return num
    }
})

console.log(t68)

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.

let t69 = task.filter(function(num){
    if (typeof num == 'string' && num.charAt(0) == 's') {
        return num
    }
})

console.log(t69)

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.

let t70 = task.filter(function(num){
    if (typeof num == 'string' && num.charAt(0) == 'o') {
        return num
    }
})

console.log(t70)

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide d.

let t71 = task.filter(function(num){
    let lastChar = num[num.length - 1]
    if (typeof num == 'string' && lastChar == 'd') {
        return num
    }
})

console.log(t71)

// 3.72. Gauti tik tekstus (string), kurie baigiasi raide s.

let t72 = task.filter(function(num){
    let lastChar = num[num.length - 1]
    if (typeof num == 'string' && lastChar == 's') {
        return num
    }
})

console.log(t72)

// 3.73. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.

let t73 = task.filter(function(num){
    if (typeof num == 'string' && num.length > 4 && num.includes('o') ) {
        return num
    }
})

console.log(t73)

// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.

let t74 = task.filter(function(num){
    if (typeof num == 'string' && num.length >= 4 && num.includes('a') ) {
        return num
    }
})

console.log(t74)

// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.

let t75 = task.filter(function(num){
    if (typeof num == 'string' && !num.length % 2) {
        return num
    }
})

console.log(t75)
// nera tokiu masyvo nariu

// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.

let t76 = task.filter(function(num){
    if (typeof num == 'string' && num.length % 2 && num.includes('s')) {
        return num
    }
})

console.log(t76)

// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.

let t77 = task.filter(function(num){
    if (typeof num == 'string' && num.at(2) == 'a') {
        return num
    }
})

console.log(t77)

// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.

let t78 = task.filter(function(num){
    if (typeof num == 'string' && num.charAt(3) == 'l') {
        return num
    }
})

console.log(t78)

// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.

let t79 = task.filter(function(num){
    if (typeof num == 'string' && num.charAt(4) != 't' && num.length > 4) {
        return num
    }
})

console.log(t79)

// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.

let t80 = task.filter(function(num){
    if (typeof num == 'string' && num.charAt(0) != 'e' && num.length < 6 && isNaN(num.charAt(0))) {
        return num
    }
})

console.log(t80)


// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 4.1. Tik skaičius (number tipo duomenis).
for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'number') {
        console.log(task[i])
    }
} 

task.map((num) => {
    if (typeof num == 'number') {
        console.log(num)
    }  
})
// 4.2. Tik tekstą (string tipo duomenis).
for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'string') {
        console.log(task[i])
    }
} 

task.map((num) => {
    if (typeof num == 'string') {
        console.log(num)
    }  
})
// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'number') {
        console.log(task[i] ** 4)
    }
} 

task.map((num) => {
    if (typeof num == 'number') {
        console.log(num ** 4)
    }  
})
// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'number') {
        console.log(task[i] + 55)
    }
} 

task.map((num) => {
    if (typeof num == 'number') {
        console.log(num + 55)
    }  
})
// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'number') {
        console.log(task[i] / 2)
    }
} 

task.map((num) => {
    if (typeof num == 'number') {
        console.log(num / 2)
    }  
})
// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'number') {
        console.log('Number: ' + task[i])
    }
} 

task.map((num) => {
    if (typeof num == 'number') {
        console.log('Number: ' + num)
    }  
})
// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
//   "Index: 0, Number: 2"
//   "Index: 1, Number: 3"
//   "Index: 2, Number: 5"
for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'number') {
        console.log('Index: ' + i + `, ` + 'Number: ' + task[i])
    }
} 

task.map((num, i) => {
    if (typeof num == 'number') {
        console.log('Index: ' + i + `, ` + 'Number: ' + num)
    }  
})

//   Ir t.t.
// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'number') {
        console.log(task[i] * i)
    }
} 

task.map((num, i) => {
    if (typeof num == 'number') {
        console.log(num * i)
    }  
})

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.


let skaiciuArr = task.filter((item)=>{
    return typeof item == 'number'
})

console.log(skaiciuArr)

for (let i = 0; i < skaiciuArr.length; i++) {
    let currentNum = skaiciuArr[i]
    let prevNum = skaiciuArr[i-1]
    if (i == 0) {
        console.log(currentNum)
    } else {
        console.log(currentNum * prevNum)
    }
}



for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'number' && typeof task[i - 1] == 'number') {
        console.log(task[i] * task[i-1])
    } else if (typeof task[i] == 'number' && typeof task[i - 1] != 'number' && i > 1 ) {
        console.log(task[i] * task[i-2])

}
} 

task.map((num, i) => {
    if (typeof num == 'number' && typeof task[i - 1] == 'number') {
        console.log(num * task[i-1])
    } else if (typeof num == 'number' && typeof task[i - 1] != 'number' && i > 1 ) {
        console.log(num * task[i-2])

}})

//Kazkas sitam negerai ↑

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'number') {
        if (task[i] * 5 > 350)
        console.log(task[i])
}
} 

task.map((num) => {
    if (typeof num == 'number') {
        if (num * 5 > 350)
        console.log(num * 5)
}
})
// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'string') {
        console.log(task[i] + ' has ' + task[i].length + ' symbols.')
}
} 

task.map((num) => {
    if (typeof num == 'string') {
        console.log( num + ' has ' + num.length + ' symbols.')
}
})
// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".

function insertCharacter(str, n) {
    let val = []
    let i, l
    for (i = 0, l = str.length; i < l; i += n) {
        val.push(str.substr(i, n))
    }
 
    return val
}

// Sita ↑ nucopinau nuo https://www.geeksforgeeks.org/insert-a-character-after-every-n-characters-in-javascript/


for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'string') {
        let naujas = task[i].toLocaleUpperCase()
        console.log(insertCharacter(naujas, 1).join('-'))
    }
} 

task.map((num) => {
    if (typeof num == 'string') {
        let naujas = num.toLocaleUpperCase()
        console.log(insertCharacter(naujas, 1).join('-'))
    }
})


for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'string') {
        console.log(task[i].split('').join('-').toUpperCase())
    }
} 




// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";

function replaceCharAtIndex(str, index, replacement, index2) {
    let pirmas = str.substr(0, index) + replacement + str.substr(index + 1)
    return pirmas.substr(0, index2) + replacement + pirmas.substr(index2 + 1)
}

for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'string') {
        // console.log(replaceCharAtIndex(task[i], 0, '_', 2))
        console.log(replaceCharAtIndex(task[i], [0, 2, 5], '_'))
    }
} 

task.map((num) => {
    if (typeof num == 'string') {
        console.log(replaceCharAtIndex(num, 0, '_', 2))
    }
})

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
function reversingString(arr) {
        
    let arrayStrings = arr.split("")
    let reversingArray = arrayStrings.reverse()
    let joinArray = reversingArray.join("")
            
    return joinArray
}
for (let i = 0; i < task.length; i++) {
    if (typeof task[i] == 'string') {
        console.log(reversingString(task[i]))
    }
} 
task.map((num) => {
    if (typeof num == 'string') {
        console.log(reversingString(num))
    }
})

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".
for (let i = 0; i < task.length; i++) {

    if (typeof task[i] == 'string' && i == 0) {
        console.log(`Word ` + task[i] + ' is between ' + task[i+1] + ' in the array.')
    } else if (typeof task[i] == 'string' && i < task.length - 1 ) {
        console.log(`Word ` + task[i] + ' is between ' + task[i-1] + ' and ' + task[i+1] + ' in the array.')
    } else if (typeof task[i] == 'string') {
        console.log(`Word ` + task[i] + ' is between ' + task[i-1] + ' in the array.')

    }
} 
task.map((num, i) => {
    if (typeof num == 'string' && i == 0) {
        console.log(`Word ` + num + ' is between ' + task[i+1] + ' in the array.')
    } else if (typeof num == 'string' && i < task.length - 1 ) {
        console.log(`Word ` + num + ' is between ' + task[i-1] + ' and ' + task[i+1] + ' in the array.')
    } else if (typeof num == 'string') {
        console.log(`Word ` + num + ' is between ' + task[i-1] + ' in the array.')

    }
})
