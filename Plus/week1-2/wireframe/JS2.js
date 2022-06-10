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
}

let button=addEventListener("click",func)
//challenge3

function fcelsius(event){
  event.preventDefault()
  let gradus=document.querySelector("#gradus")
  gradus.innerHTML=32

}

  let celsius=document.querySelector("#celsius")
  celsius.addEventListener("click",fcelsius)

function ffarengeit(event){
  event.preventDefault()
  let gradus2=document.querySelector("#gradus")
  gradus2.innerHTML=66}
  

  let farengeit=document.querySelector("#farengeit")
  farengeit.addEventListener("click",ffarengeit)