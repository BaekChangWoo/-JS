

const APIKEY="ef9f0802673e589ea94dc7054a9d9961"
function success(position){
    const lat =position.coords.latitude
    const lon=position.coords.longitude 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}
    `
    fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name
            weather.innerText = data.weather[0].main
        })} 

function failure(){}


navigator.geolocation.getCurrentPosition(success,failure)