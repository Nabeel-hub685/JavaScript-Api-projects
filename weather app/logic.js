const apiKey='04d9ad5f31dfa8a7e23e093e0a4e5e90';
let apiURL=`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

let inputBox= document.querySelector('.search input');
let btn= document.querySelector(".search button");
let weatherIcon= document.querySelector(".weather-icon");


async function checkWeather(city){
    let response= await fetch(apiURL + city + `&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+'°c';
    document.querySelector(".humidity").innerHTML=data.main.humidity + '%';
    document.querySelector(".wind").innerHTML=data.wind.speed + 'km/hr';

   if (data.weather[0].main=='Clouds') {
         weatherIcon.src='clouds.png';
   }
   else if(data.weather[0].main=='Clear'){
         weatherIcon.src='clear.png';
   }
   else if(data.weather[0].main=='Drizzle'){
         weatherIcon.src='drizzle.png';
   }
   else if(data.weather[0].main=='Mist'){
        weatherIcon.src='mist.png';
   }
   else if(data.weather[0].main=='Snow'){
        weatherIcon.src='snow.png';
   }
   else if(data.weather[0].main=='rain'){
        weatherIcon.src='rain.png';
   }
}



btn.addEventListener("click", ()=>{
    checkWeather(inputBox.value);
})