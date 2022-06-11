//challenge1 
let info=new Date()
let day=info.getDay()
let hour=info.getHours()
if (hour<10){
  hour=`0${hour}`
}

let minute=info.getMinutes()
if (minute<10){
  minute=`0${hour}`
}

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satuday"
  ];
let all_time=`${days[day]} ${hour}:${minute}`
let notnull=document.querySelector("#now")
notnull.innerHTML=all_time



//challenge2
function func(){
    let infoFromInput=document.querySelector("#city")
    infoFromInput=infoFromInput.value
    let weather=document.querySelector("#city_weather")
  
    weather.innerHTML=infoFromInput
    let apiKey="2610fc391e59a1d4c413f050d38f672d"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${infoFromInput}&units=metric&appid=${apiKey}`
    function showWeather(response){
      let currentWeather=Math.round(response.data.main.temp)
      let sunOrClouds=response.data.weather[0].main
     
      let sunOrCloud=document.querySelector("#whatIsTheWeather")
          sunOrCloud.innerHTML=sunOrClouds
          
      
      function fcelsius(event){
        event.preventDefault()
        let gradus=document.querySelector("#gradus")
        gradus.innerHTML=currentWeather
      
      }
      
        let celsius=document.querySelector("#celsius")
        celsius.addEventListener("click",fcelsius)
      
      function ffarengeit(event){
        event.preventDefault()
        let gradus2=document.querySelector("#gradus")
        gradus2.innerHTML=Math.round(currentWeather*1.8+32)}
        
      
        let farengeit=document.querySelector("#farengeit")
        farengeit.addEventListener("click",ffarengeit)
      
    }

    axios.get(apiUrl).then(showWeather)
    
}
let button=addEventListener("click",func)

  

  //searchEngine
  