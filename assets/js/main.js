const keyWeather1 = '38d01c23be97354a5'
const keyWeather2 = 'a86c28153befa3b'

const cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temperatura')
const maxTemp = document.querySelector('.max-temperatura')
const minTemp = document.querySelector('.min-temperatura')

const form = document.querySelector('#city')
let inputPesquisa = document.querySelector('.pesquisa')

const resultado = document.querySelector('.resultado')


form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    
    let input = document.querySelector('.pesquisa').value

    if(input!=''){
        let consulta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=${keyWeather1+keyWeather2}&units=metric&lang=pt_br`)
        let pesquisa = await consulta.json()
            if(pesquisa.cod == '200'){
                apresentaResultado(pesquisa)
            }else{
                apresentaErro()
            }
    }else{
        alert('Digite uma cidade')
    }
})

function apresentaResultado(pesquisa){
    inputPesquisa.value = ''
    cidade.insertAdjacentHTML('beforeend',`${pesquisa.name}, ${pesquisa.sys.country}`);
    temperatura.insertAdjacentHTML('beforeend',` ${pesquisa.main.temp.toFixed(0)}º`);
    maxTemp.insertAdjacentHTML('beforeend', ` ${pesquisa.main.temp_max.toFixed(0)}º`);
    minTemp.insertAdjacentHTML('beforeend', ` ${pesquisa.main.temp_min.toFixed(0)}º`);
    resultado.style.display = 'block'
}

function apresentaErro(){
    cidade.insertAdjacentHTML('beforeend', `Cidade Não Encontrada`)
    resultado.style.display = 'block'
}