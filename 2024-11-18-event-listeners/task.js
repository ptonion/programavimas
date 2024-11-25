let div = document.querySelector('div') 

let h3 = document.createElement('h3')
let buttonPlus1 = document.createElement('button')
let buttonMinus1 = document.createElement('button')
let buttonPlus2 = document.createElement('button')
let buttonMinus2 = document.createElement('button')
let buttonPlus3 = document.createElement('button')
let buttonMinus3 = document.createElement('button')
let buttonReset = document.createElement('button')

let startNum = 10

let num = startNum

h3.textContent = num
buttonPlus1.textContent = '+'
buttonMinus1.textContent = '-'
buttonPlus2.textContent = '+2'
buttonMinus2.textContent = '-2'
buttonPlus3.textContent = '+3'
buttonMinus3.textContent = '-3'
buttonReset.textContent = 'reset'

div.append(
    h3,
    buttonMinus3,
    buttonMinus2,
    buttonMinus1,
    buttonReset,
    buttonPlus1,
    buttonPlus2,
    buttonPlus3,
    newButton(-5)
)

checkData(0)

buttonPlus1.addEventListener('click', () => checkData(1))
buttonMinus1.addEventListener('click', () => checkData(-1))
buttonPlus2.addEventListener('click', () => checkData(2))
buttonMinus2.addEventListener('click', () => checkData(-2))
buttonPlus3.addEventListener('click', () => checkData(3))
buttonMinus3.addEventListener('click', () => checkData(-3))

buttonReset.addEventListener('click', function(){
    num = startNum
    checkData(0)
})


function checkColor () {
    if (num > 4) {
        h3.style.color = 'green'
    } else {
        h3.style.color = 'red'
    }
}



function checkData(changeNum) {

    console.log(num)
    
    console.log(changeNum)

    num = num + changeNum
    
    console.log(num)
    h3.textContent = num
    checkColor()

    if(num >= 10) {
        buttonPlus1.setAttribute('disabled', true)
    } else {
        buttonPlus1.removeAttribute('disabled')
    }
    
    if(num <= 1) {
        buttonMinus1.setAttribute('disabled', true)
    } else {
        buttonMinus1.removeAttribute('disabled')
    }

    if(num >= 9) {
        buttonPlus2.setAttribute('disabled', true)
    } else {
        buttonPlus2.removeAttribute('disabled')
    }
    
    if(num <= 2) {
        buttonMinus2.setAttribute('disabled', true)
    } else {
        buttonMinus2.removeAttribute('disabled')
    }
    
    if(num >= 8) {
        buttonPlus3.setAttribute('disabled', true)
    } else {
        buttonPlus3.removeAttribute('disabled')
    }
    
    if(num <= 3) {
        buttonMinus3.setAttribute('disabled', true)
    } else {
        buttonMinus3.removeAttribute('disabled')
    }
    
}

function newButton(number) {

    const button = document.createElement('button')

    button.textContent = number >= 0 ? '+' + number : number


    // buttonMinusNum.addEventListener('click', function(){
    //     num = num - number
    //     h3.textContent = num
    //     checkData()
    //     checkColor()
    // })
    return button
}

// newButton(3); // Creates +5 and -5 buttons