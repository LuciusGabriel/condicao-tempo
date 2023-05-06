const keyWeather = '38d01c23be97354a5a86c28153befa3b'
const apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${keyWeather}&lang=pt_br`

console.log(apiURL)

const form = document.querySelector('#city')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log('Correto')
})