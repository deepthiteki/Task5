try{
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();
var countrydata=[];
var latlon=[];
request.onload=function(){
countrydata=JSON.parse(this.response);
countrydata.forEach(element => { latlon.push(element["latlng"]);});
}
var weather=[];

for(i=0;i<latlon.length;i++){
    request.open("GET",`api.openweathermap.org/data/2.5/weather?lat=${latlon[i][0]}&lon=${latlon[i][1]}&appid=a4ee930e1a2fe97b4c98f30ea331f660`,true);
    request.send();
    weather.push(JSON.parse(this.response));
}
console.log(weather);
}
catch(error){
    console.log(error.message);
}