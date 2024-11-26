let div = document.querySelector('div') 

let numbers = [-5, -3, -2, -1, 0, 1, 2, 3, 5]

for(let num of numbers) {
    console.log(num)
}

let h3 = document.createElement('h3')
div.append(h3)

let buttonPlus5 = newButton(5) 
div.append(buttonPlus5)

let buttonPlus3 = newButton(3)
div.append(buttonPlus3)

let buttonPlus2 = newButton(2)
div.append(buttonPlus2)

let buttonPlus1 = newButton(1)
div.append(buttonPlus1)

let buttonReset = document.createElement('button')
div.append(buttonReset)

let buttonMinus1 = newButton(-1)
div.append(buttonMinus1)

let buttonMinus2 = newButton(-2)
div.append(buttonMinus2)

let buttonMinus3 = newButton(-3)
div.append(buttonMinus3)

let buttonMinus5 = newButton(-5)
div.append(buttonMinus5)


let startNum = 10

let num = startNum

buttonReset.textContent = 'reset'

checkData(0)


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

    if(num >= 6) {
        buttonPlus5.setAttribute('disabled', true)
    } else {
        buttonPlus5.removeAttribute('disabled')
    }
    
    if(num <= 5) {
        buttonMinus5.setAttribute('disabled', true)
    } else {
        buttonMinus5.removeAttribute('disabled')
    }
    
}

function newButton(number) {

    const button = document.createElement('button')

    button.textContent = number >= 0 ? '+' + number : number


    button.addEventListener('click', function(){
        checkData(number)
    })
    return button
}

// newButton(3); // Creates +5 and -5 buttons