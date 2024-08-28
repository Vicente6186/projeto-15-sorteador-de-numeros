const quantity = document.getElementById('quantity')
const from = document.getElementById('from')
const to = document.getElementById('to')
const repeatNumber = document.getElementById('repeat-number')
const form = document.querySelector('form')
const resultUl = document.querySelector('#result ul')
const sectionCreate = document.querySelector('#create')
const sectionResult = document.querySelector('#result')
const btnAgain = document.querySelector('#btn-again')


function createRandomNumbers(quantity, min, max, noRepeat) {
    const numbers = []    
    if(quantity > Math.abs(max - min)) return numbers
    while (numbers.length < quantity){
        const newNumber = Math.round(Math.random() * (max - min) + min)
        if(noRepeat && numbers.includes(newNumber)) continue
        numbers.push(newNumber) 
        console.log(newNumber);
        
    }
    
    return numbers
}


btnAgain.addEventListener('click', () => {
    sectionResult.setAttribute('hidden', true)
    sectionCreate.removeAttribute('hidden')
})

form.addEventListener('submit', event => {
    event.preventDefault()
    const quantityValue = Number(quantity.value)
    const fromValue = Number(from.value)
    const toValue = Number(to.value)
    const repeatNumberValue = repeatNumber.checked

    resultUl.innerHTML = ''
    
   const createdNumbers =  createRandomNumbers(quantityValue, fromValue, toValue, repeatNumberValue)
   createdNumbers.forEach(createdNumber => resultUl.innerHTML += `<li>${createdNumber}</li>`)
    sectionCreate.setAttribute('hidden', true)
    sectionResult.removeAttribute('hidden')
})

