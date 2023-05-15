const keyWeather1 = '38d01c23be97354a5'
const keyWeather2 = 'a86c28153befa3b'

const cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temperatura')
const maxTemp = document.querySelector('.max-temperatura')
const minTemp = document.querySelector('.min-temperatura')

const form = document.querySelector('#city')



form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    
    let input = document.querySelector('.pesquisa').value

    if(input!=''){
        let consulta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=${keyWeather1+keyWeather2}&units=metric&lang=pt_br`)
        let pesquisa = await consulta.json()
            if(pesquisa.cod == '200'){
                apresentaResultado(pesquisa)
            }else{
                console.log('Cidade Não Encontrada')
            }
    }else{
        console.log('Digite uma cidade')
    }
})

function apresentaResultado(pesquisa){    
    cidade.innerHTML = `${pesquisa.name}, ${pesquisa.sys.country}`
    temperatura.innerHTML = `${pesquisa.main.temp}`
    maxTemp.innerHTML = `${pesquisa.main.temp_max}`
    minTemp.innerHTML = `${pesquisa.main.temp_min}`
}