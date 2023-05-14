const keyWeather1 = '38d01c23be97354a5'
const keyWeather2 = 'a86c28153befa3b'

const cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temperatura')
const maxTemp = document.querySelector('.max-temperatura')
const minTemp = document.querySelector('.min-temperatura')

const form = document.querySelector('#city')

let input = document.querySelector('.pesquisa').value

form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    if(input!=' '){
        let consulta = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${encodeURI(input)}&appid=${keyWeather1+keyWeather2}&lang=pt_br`)
        let resultado = await consulta.json()
        
            console.log(consulta)
    }else{
        console.log('Digite uma cidade')
    }
})