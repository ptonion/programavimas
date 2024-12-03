// let div = document.querySelector('div') 
// let h3 = document.createElement('h3')
// div.append(h3)

// let numbers = [-5, -3, -2, -1, 0 , 1, 2, 3, 5]

// for(let num of numbers) {
//     console.log(num)
//     // let buttonPlus5 = newButton(5) 
//     div.append(newButton(num))
//     // checkData(0)
//     disableButton(num)
// }


// // let buttonPlus5 = newButton(5) 
// // div.append(buttonPlus5)

// // let buttonPlus3 = newButton(3)
// // div.append(buttonPlus3)

// // let buttonPlus2 = newButton(2)
// // div.append(buttonPlus2)

// // let buttonPlus1 = newButton(1)
// // div.append(buttonPlus1)

// let buttonReset = document.createElement('button')
// div.append(buttonReset)

// // let buttonMinus1 = newButton(-1)
// // div.append(buttonMinus1)

// // let buttonMinus2 = newButton(-2)
// // div.append(buttonMinus2)

// // let buttonMinus3 = newButton(-3)
// // div.append(buttonMinus3)

// // let buttonMinus5 = newButton(-5)
// // div.append(buttonMinus5)


// let startNum = 10

// let num = startNum

// buttonReset.textContent = 'reset'

// checkData(0)


// buttonReset.addEventListener('click', function(){
//     num = startNum
//     checkData(0)
// })


// function checkColor () {
//     if (num > 4) {
//         h3.style.color = 'green'
//     } else {
//         h3.style.color = 'red'
//     }
// }



// function checkData(changeNum) {

//     console.log(num)
    
//     console.log(changeNum)

//     num = num + changeNum
    
//     console.log(num)
//     h3.textContent = num
//     checkColor()

//     if(num >= 10) {
//         buttonPlus1.setAttribute('disabled', true)
//     } else {
//         buttonPlus1.removeAttribute('disabled')
//     }
    
//     if(num <= 1) {
//         buttonMinus1.setAttribute('disabled', true)
//     } else {
//         buttonMinus1.removeAttribute('disabled')
//     }

//     if(num >= 9) {
//         buttonPlus2.setAttribute('disabled', true)
//     } else {
//         buttonPlus2.removeAttribute('disabled')
//     }
    
//     if(num <= 2) {
//         buttonMinus2.setAttribute('disabled', true)
//     } else {
//         buttonMinus2.removeAttribute('disabled')
//     }
    
//     if(num >= 8) {
//         buttonPlus3.setAttribute('disabled', true)
//     } else {
//         buttonPlus3.removeAttribute('disabled')
//     }
    
//     if(num <= 3) {
//         buttonMinus3.setAttribute('disabled', true)
//     } else {
//         buttonMinus3.removeAttribute('disabled')
//     }

//     if(num >= 6) {
//         buttonPlus5.setAttribute('disabled', true)
//     } else {
//         buttonPlus5.removeAttribute('disabled')
//     }
    
//     if(num <= 5) {
//         buttonMinus5.setAttribute('disabled', true)
//     } else {
//         buttonMinus5.removeAttribute('disabled')
//     }
    
// }

// function newButton(number) {

//     const button = document.createElement('button')

//     button.textContent = number >= 0 ? '+' + number : number


//     button.addEventListener('click', function(){
//         checkData(number)
//     })
//     return button
// }


// function disableButton (number) {
//     let stopHigh = number + 1
//     let stopLow = number

//     if(num >= stopHigh) {
//         button.setAttribute('disabled', true)
//     } else {
//         button.removeAttribute('disabled')
//     }
    
//     if(num <= stopLow) {
//         button.setAttribute('disabled', true)
//     } else {
//         button.removeAttribute('disabled')
//     }
// }


function init() {
    
    let div = document.querySelector("div")
    let h3 = document.createElement("h3")
    div.append(h3)
    
    let numbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
    
    let startNum = 10
    let num = startNum

    // h3.textContent = num
    
    let buttons = {}
    
    for (let number of numbers) {
        let newButton = createButton(number)
        div.append(newButton)
        buttons[number] = newButton
        console.log(buttons[number])
    }
    
    checkData(0, h3, numbers, buttons, num, startNum)
}

init()

function numHandler(num, changeNum, h3) {
    // if  (changeNum == 0) {
    //     num = startNum
    // }
    const updatedNum = num + changeNum
    num = num + changeNum
    h3.textContent = num
    return updatedNum
    // checkColor(num, h3)
}

function handelButtonsDisable (numbers, num) {

    for (let number of numbers) {
        if (num + number > 10 || num + number < 1) {
            buttons[number].setAttribute("disabled", true)
        } else {
            buttons[number].removeAttribute("disabled")
        }
    }

}

function checkData(changeNum, h3, numbers, buttons, num, startNum) {

    let updatedNum = numHandler(num, changeNum, h3)
    handelButtonsDisable(numbers, updatedNum)
}

function checkColor(num, h3) {
    console.log(h3)
    if (num > 5) {
        h3.style.color = "green"
    } else {
        h3.style.color = "red"
    }
}

function createButton(number) {
    let button = document.createElement("button")
    button.textContent = number
    if (number == 0) {
        button.textContent = 'reset'
    }
    if (number > 0) {
        button.textContent = '+' + number
    }
    button.addEventListener("click", function () {
        checkData(number)
    })
    return button
}

 