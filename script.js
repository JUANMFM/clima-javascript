// En vez de tener el API key directamente en el código
let api_key = process.env.WEATHER_API_KEY
//let ciudad = 'Londres'
let difKelvin = 273.15

let urlBase = 'https://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudadInput = document.getElementById('ciudadEntrada').value //esto fue importante para no depender de poner let ciudad = ...
    const ciudad = ciudadInput //aqui estaba ciudadInput.value y tiraba error

    if(ciudad.trim() !== ''){ // Verificamos que no esté vacío
        fetchDatosClima(ciudad)
    } else {
        alert('Por favor, ingrese una ciudad');
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
     .then(data => data.json())
     .then(data => mostrarDatosClima(data))

}

function mostrarDatosClima(data){
    //console.log(data) //si lo quitas deja de salir en la consola de la web
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const paisNombre = data.sys.country
    const humedad = data.main.humidity
    const icono = data.weather[0].icon

    
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}ºC`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
        

}


// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`)
//      .then(response => response.json())
//      .then(response => console.log(response))






