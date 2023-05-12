const keyWeather1 = '38d01c23be97354a5'
const keyWeather2 = 'a86c28153befa3b'

const cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temperatura')
const maxTemp = document.querySelector('.max-temperatura')
const minTemp = document.querySelector('.min-temperatura')

const form = document.querySelector('#city')


form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const input = document.querySelector('.pesquisa').value
    if(input!=''){
        fetchAPI(encodeURI(input))
    }else{
        console.log('Digite uma cidade')
    }
})

async function fetchAPI(city){
    const consulta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyWeather1+keyWeather2}&lang=pt_br`)
    const resultado = await consulta.json()

    console.log(resultado)
}