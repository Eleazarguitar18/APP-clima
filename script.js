let api_key = '5cee13bb8fb5ebdd771c8ab53a454af2'
let city_name = "London"
let difKelvin = 273.15

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => console.log(response))

document.getElementById('botonBusqueda').addEventListener('click', () => {

})