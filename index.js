const apiKey="e58c6ef22c97eaec73463a157d627377";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weathericon=document.querySelector(".weather-icon")
    async function checkWeather(city){
        const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
        if(response.status == 404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }else{
        let data= await response.json();

       document.querySelector(".city").innerHTML=data.name;
       document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C" ;
       document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
       document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
       if(data.weather[0].main == "Clouds"){
        weathericon.src="images/clouds.png";
        document.querySelector(".background").style.backgroundImage="url(images/clouds1.png)";
        document.querySelector(".background").style.backgroundSize ="cover";
        document.querySelector(".background").style.backgroundRepeat="no-repeat";
        document.querySelector(".background").style.backgroundPosition="center center"
        document.querySelector(".card").style.background="linear-gradient(140deg, #646565,#5b548a)";
        document.querySelector(".card").style.opacity="0.5";
       }
       else if(data.weather[0].main == "Clear"){
        weathericon.src="images/clear.png";
        document.querySelector(".background").style.backgroundImage="url(images/clear1.png)";
        document.querySelector(".background").style.backgroundSize ="cover";
        document.querySelector(".background").style.backgroundRepeat="no-repeat";
        document.querySelector(".background").style.backgroundPosition="center center"
        document.querySelector(".card").style.background="linear-gradient(140deg, #74D9EE,#5b548a)";
        document.querySelector(".card").style.opacity="0.5";
        
       }
       else if(data.weather[0].main == "Rain"){
        weathericon.src="images/rain.png";
        document.querySelector(".background").style.backgroundImage="url(images/rain1.png)";
        document.querySelector(".background").style.backgroundSize ="cover";
        document.querySelector(".background").style.backgroundRepeat="no-repeat";
        document.querySelector(".background").style.backgroundPosition="center center"
        document.querySelector(".card").style.background="linear-gradient(140deg, #646565,#5b548a)";
        document.querySelector(".card").style.opacity="0.5";
      
       }
       else if(data.weather[0].main == "Drizzle"){
        weathericon.src="images/drizzle.png";
        document.querySelector(".background").style.backgroundImage="url(images/drizzle.png)";
        document.querySelector(".background").style.backgroundSize ="cover";
        document.querySelector(".background").style.backgroundRepeat="no-repeat";
        document.querySelector(".background").style.backgroundPosition="center center"
        document.querySelector(".card").style.background="linear-gradient(140deg, #646565,#5b548a)";
        document.querySelector(".card").style.opacity="0.5";
       }
       else if(data.weather[0].main == "Haze","Smoke","Fog"){
        weathericon.src="images/mist.png";
        document.querySelector(".background").style.backgroundImage="url(images/mist1.png)";
        document.querySelector(".background").style.backgroundSize ="cover";
        document.querySelector(".background").style.backgroundRepeat="no-repeat";
        document.querySelector(".background").style.backgroundPosition="center center"
        document.querySelector(".card").style.background="linear-gradient(140deg, #B0B3B4,#5b548a)";
        document.querySelector(".card").style.opacity="0.5";
       }
       document.querySelector(".weather").style.display="block";
       document.querySelector(".error").style.display="none";
       
    }}
    searchBtn.addEventListener("click" , ()=>{
        checkWeather(searchBox.value);
    })
