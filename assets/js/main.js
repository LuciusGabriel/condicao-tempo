const keyWeather1 = '38d01c23be97354a5'
const keyWeather2 = 'a86c28153befa3b'
const apiURL = ``


const form = document.querySelector('#city')

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const input = document.querySelector('.pesquisa').value
    
    fetchAPI(encodeURI(input))
})

async function fetchAPI(city){
    const consulta = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${keyWeather1+keyWeather2}&lang=pt_br`)
    const resultado = await consulta.json()


    console.log(resultado)
}