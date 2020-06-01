console.log("app working");

//global variables
const website="https://api.openweathermap.org/data/2.5/weather?q=";
const key="&appid=7bce8b7a1d5d076a18f60d2b2cb237ef&units=metric";
var weatherObj;

//function to send XHR
function getWeather(){
  let city=document.getElementById("city").value;
  let url= website+city+key;
  let request= new XMLHttpRequest();//xhr object
  request.open("GET",url);
  request.send();
  //function to recieve data in JSON and display
  request.onload=function(){
    document.getElementById("weatherDisplay").style.display="flex";
    weatherObj=JSON.parse(request.responseText);
    document.getElementById("cityname").innerHTML= city;
    document.getElementById("currenttemp").innerHTML= weatherObj.main.temp + " °C";
    document.getElementById("feelslike").innerHTML=  "Feels like : " +weatherObj.main.feels_like + " °C";
    document.getElementById("description").innerHTML=  weatherObj.weather[0].main;
    document.getElementById("description2").innerHTML=  weatherObj.weather[0].description;
    document.getElementById("maxtemp").innerHTML=  "Max temp : "+weatherObj.main.temp_max + " °C";
    document.getElementById("mintemp").innerHTML=  "Min temp : "+weatherObj.main.temp_min + " °C";
    document.getElementById("humidity").innerHTML=  "Humidity : "+weatherObj.main.humidity +" %";
    document.getElementById("windspeed").innerHTML=  "Wind speed : "+weatherObj.wind.speed + " m/s";
    setBg(weatherObj);
  }
  console.log("gotWeather");
}
//setting background according to weather
function setBg(weatherObj){
  if(weatherObj.main.humidity>=90 || weatherObj.weather[0].main=="Rain" ){
    document.body.style.backgroundImage= "url('images/rainy.jpg')";
  }
  else if(weatherObj.main.temp<=10 || weatherObj.weather[0].main=="Snow"){
    document.body.style.backgroundImage= "url('images/cold.jpg')";
  }
  else if(weatherObj.weather[0].main=="Clouds"){
    document.body.style.backgroundImage= "url('images/cloudy.jpg')";
  }
  else if(weatherObj.main.temp>=30 ){
    document.body.style.backgroundImage= "url('images/sun.jpg')";
  }
}
