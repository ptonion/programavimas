const form = document.querySelector('#test-form')


form.addEventListener('submit', function(event){
    event.preventDefault()
    const name = document.querySelector('#name').value
    console.dir(name)

})