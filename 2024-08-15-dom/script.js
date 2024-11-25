
// paselectinti html elementa
let paragraph = document.querySelector('p') 

// keiciame teksto reiksme
// paragraph.textContent = 'labas'
paragraph.innerHTML = 'labas <strong>rytas</strong>'

console.dir(paragraph)

//kuriame html elementa

let span = document.createElement('span')


span.textContent = '!'
console.log(span)

//eleemento idejimas 

//append - jis ideda elementa i kito elemento pabaiga
paragraph.append(span)
//prepend - jis ideda elementa i kito elemento pradzia
paragraph.prepend(span)
//before - ides pries kita elemnta
paragraph.before(span)
//after - ides po kito elemento
paragraph.after(span)

//remove - istrina elemnta is html
span.remove()

console.log(span)


let paragraph2 = document.createElement('p')

paragraph2.textContent = 'labas'

paragraph.after(paragraph2)




// Būdas pakeisti HTML elemento klases

paragraph2.className = 'pirma-klase antra-klase'

paragraph2.className = 'trecia-klase'
// paragraph2.className = paragraph2.className + ' ketvirta-klase'

paragraph2.className += ' ketvirta-klase'


// Prideda klasę prie HTML elemento
console.log(paragraph2.classList)
paragraph2.classList.add('penkta-klase')
paragraph2.classList.add('sesta-klase', 'septinta-klase')
// Pašalina klasę iš HTML elemento
paragraph2.classList.remove('ketvirta-klase')
paragraph2.classList.remove('trecia-klase', 'penkta-klase')
paragraph2.classList.remove('pirma-klase')

// Prideda klasę prie HTML elemento, jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę jau turi
paragraph2.classList.toggle('toggle') // prideda
paragraph2.classList.toggle('toggle') // nuima
paragraph2.classList.toggle('toggle') // prideda
// Pakeičia klasę HTML elemente
paragraph2.classList.replace('sesta-klase', 'astunta-klase') 
// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(paragraph2.classList.contains('toggle') )
console.log(paragraph2.classList.contains('pirma-klase') )






console.dir(paragraph2)

paragraph.id = 'paragraph-id'




let link = document.createElement('a')

link.textContent = 'nuoroda'
paragraph2.after(link)

// link.href = 'https://google.com'
// link.target = '_blank'

link.setAttribute('href', 'https://google.com')
link.setAttribute('target', '_blank')
link.removeAttribute('target')


let linkAttributeName = 'target'
let linkAttributeValue = '_blank'

link.setAttribute(linkAttributeName, linkAttributeValue)


console.dir(link.style)

link.style.border = '2px solid green'
link.style.padding = '5px 10px'
link.style.display = 'inline-block' 
link.style.fontSize = '25px' 

link.style = `color: red;
              background-color: yellow;
              border: 2px solid green;
              padding: 5px 10px;
              display: inline-block;
              text-decoration: none;
              text-transform: uppercase;`

link.style.fontSize = '25px' 
