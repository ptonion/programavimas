// console.log('- ' + 1)
// console.log('- ' + 2)
// console.log('- ' + 3)
// console.log('- ' + 4)
// console.log('- ' + 5)
// console.log('- ' + 6)
// console.log('- ' + 7)
// console.log('- ' + 8)
// console.log('- ' + 9)
// console.log('- ' + 10)

function count(num) {
    console.log('- ' + num)
}

// count(1)
// count(2)
// count(3)
// count(4)
// count(5)
// count(6)
// count(7)
// count(8)
// count(9)
// count(10)


// FOR CIKLAS (LOOP)
// 1. Iniciavimo žodelis - for
// 2. Paprasti skliaustai - ()
// 2.1. Sukuriamas kintamasis (dažniausiai jo pavadinimas yra i)
// 2.2. Sąlyga
// 2.3. Kintamojo vertės keitimas
// 3. Riestiniai skliaustai - {}

/**
 
for (kintamasis; salyga; kintamojo kitimas) {

}

 */

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {
//     count(i)
// }

// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.

function task1 (start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i + ' * 2 = ' + i * 2)
    }
}
// task1(12, 18)

function task2 (start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i + ' * 5 = ' + i * 5)
    }
}
// task2(12, 18)

function task3 (start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i + ' + 5 = ' + (i + 5))
    }
}
// task3(12, 18)

function task4 (start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i + ' - 2 = ' + (i - 2))
    }
}
// task4(12, 18)

function task5 (start, end) {
    for (let i = start; i <= end; i++) {
        // console.log(i + '`2 = ' + Math.pow(i,2))
        let answer = i**2
        let output = i + '`2 = ' + answer
        console.log(output)
    }
}
// task5(12, 18)

function task6 (start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i + '`3 = ' + Math.pow(i,3))
    }
}
// task6(12, 18)


// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.

function task71 (start, end) {
    for (let i = start; i >= end; i--) {
        console.log(i + ' * 2 = ' + (i * 2))
    }
}
// task71(60, 50)

function task72 (start, end) {
    for (let i = start; i >= end; i--) {
        console.log(i + ' * 5 = ' + (i * 5))
    }
}
// task72(60, 50)

function task73 (start, end) {
    for (let i = start; i >= end; i--) {
        console.log(i + ' + 5 = ' + (i + 5))
    }
}
// task73(60, 50)

function task74 (start, end) {
    for (let i = start; i >= end; i--) {
        console.log(i + ' - 2 = ' + (i - 2))
    }
}
// task74(60, 50)

function task75 (start, end) {
    for (let i = start; i >= end; i--) {
        console.log(i + '`2 = ' + Math.pow(i,2))
    }
}
// task75(60, 50)

function task76 (start, end) {
    for ( let i = start; i>= end; i--) {
        console.log(i + '`3 = ' + Math.pow(i,3))
    }
}
// task76(60, 50)
// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.: 
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.

// 9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:
// 9.1. Nusakytų nuo kokio skaičiaus prasidės ciklas.
// 9.2. Nusakytų iki kokio skaičiaus veiks ciklas.
// 9.3. Nusakytų kelinto ciklo metu turi išvesti atsakymą į konsolę. trec


// FIZZ BUZZ
// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";

// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";

// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".
// 7. Skaičiai, kurie dalinasi iš 11, turi būti pakeisti į žodį „Bizz".


function fb () {


    for (let i = 1; i<=120; i++) {

        let fivet = i % 5 == 0 
        let fivef = i % 5 != 0 
        let threet = i % 3 == 0 
        let threef = i % 3 != 0 
        let sevent = i % 7 == 0
        let sevenf = i % 7 != 0
        let elevent = i % 11 == 0
        let elevenf = i % 11 != 0

        
        
        if (threet && fivef && sevenf && elevenf) {
            console.log('FizzFuzz')
        }
        if (fivet && threef && sevenf && elevenf) {
            console.log('Buzz')
        }
        if (sevent && threef && fivef && elevenf) {
            console.log('Biff')
        }
        if (elevent && threef && fivef && sevenf) {
            console.log('Bizz')
        }
        if (threet && elevent && fivef && sevent) {
            console.log('FizzFuzzBizz')
        }
        if (threet && sevent && fivef && elevenf) {
            console.log('FizzFuzzBiff')
        }
        if (threet && fivet && sevenf && elevenf) {
            console.log('FizzFuzzBuzz')
        }
        if (fivet && sevent && threef && elevenf) {
            console.log('BuzzBiff')
        }
        if (fivet && elevent && threef && elevent) {
            console.log('BuzzBizz')
        }
        if (threet && fivet && sevent && elevenf) {
            console.log('FizzFuzzBuzzBiff')
        }
        if (threef && fivet && sevent && elevent) {
            console.log('BuzzBizzBiff')
        }
        if (threet && fivef && sevent && elevent) {
            console.log('FizzFuzzBiffBizz')
        }
        if (threet && fivet && sevenf && elevent) {
            console.log('FizzFuzzBuzzBizz')
        }
        if (threef && fivef && sevenf && elevenf) {
            console.log(i)
        }
       
    }
}

// fb()
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz



function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {

        let output = ''
        if(i % 2 == 0) {
            output += 'Buff'
        }
        if(i % 3 == 0) {
            output = output + 'Fizz' 
        }
        if(i % 5 == 0) {
            output = output + 'Buzz'
        }
        if(i % 7 == 0) {
            output = output + 'Biff'
        }
        if(i % 9 == 0) {
            output = output + 'Fuzz'
        }
        if(i % 11 == 0) {
            output = output + 'Bizz'
        }
        if(i % 13 == 0) {
            output = output + 'Fibb'
        }
        if(!output){
           output = i
        }
        console.log(output)

    }

}

// fizzBuzz()


let num = 5
console.log(num)
console.log(num + 1)
console.log(num)
num = 6
console.log(num)
// sudetis
num = num + 1
console.log(num)

num = num + 2
console.log(num) 

num += 1
console.log(num)

num += 2
console.log(num)

num++ 
console.log(num)
//atimtis
num = num - 1
console.log(num)
num = num - 2
console.log(num)
num -= 1
console.log(num)
num -= 2
console.log(num)
num--
console.log(num)
//daugyba
num = num * 2
console.log(num)
num *= 2
console.log(num)
//dalyba
num = num / 2
console.log(num)
num /= 2
console.log(num)
//stringas
let str = 'labas'
console.log(str)
console.log(str + ' vakaras')
console.log(str)
str = str + ' vakaras'
console.log(str)
str += '!'
console.log(str)