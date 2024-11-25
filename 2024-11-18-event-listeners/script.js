
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const h4 = document.querySelector('h4')
const h5 = document.querySelector('h5')
const h6 = document.querySelector('h6')


h1.addEventListener('click', function(){
    h1.textContent = 'clicked'
    h1.style.backgroundColor = 'yellow'
    h1.style.color = 'blue'
})

h2.addEventListener('click', function(){
    h2.style.fontSize = '50px'
})

h3.addEventListener('click', function(){
    h3.style.color = 'green'
    h1.style.color = 'green'
})

// h4.addEventListener('click', function(){
//     h2.style.border = '2px solid black'
//     h4.style.border = '2px solid black'
// })

// h5.addEventListener('click', function(){
    //     h2.style.border = '2px solid black'
    //     h4.style.border = '2px solid black'
    // })

h4.addEventListener('click', addBorders)
h5.addEventListener('click', addBorders)


function addBorders () {
    h2.style.border = '2px solid black'
    h4.style.border = '2px solid black'
    const p = document.createElement('p')
    p.textContent = 'Cia yra paragrapas'
    h6.after(p)
}

h1.addEventListener('click', switchWordCase)
h2.addEventListener('click', switchWordCase)
h3.addEventListener('click', switchWordCase)
h4.addEventListener('click', switchWordCase)
h5.addEventListener('click', switchWordCase)
h6.addEventListener('click', switchWordCase)

function switchWordCase (event) {
    const clickedElement = event.target
    console.log(event.target)
    clickedElement.style.textTransform = 'uppercase'
}