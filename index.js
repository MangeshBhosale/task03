
// (function(lat,lon){
// var req=new XMLHttpRequest();
// req.open('GET','api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=9bd736a52150f457228ec1a8df8489f6',true);
// req.send();
// req.onload=function(){
//     var data=JSON.parse(this.response);
//     for (const key in data) {
//         if (Object.hasOwnProperty.call(data, key)) {
//             const element = data[key];
//             console.log(element.country);
            
//         }
//     }
// }})(35,139);




 var req =new XMLHttpRequest();

 req.open('GET','https://restcountries.eu/rest/v2/all',true);

 req.send();


req.onload=function(){
  var data=JSON.parse(this.response);
  for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
                const element = data[key];
                         //console.log(element.name,element.latlng[0],element.latlng[1]);
                         var name=element.name;
                         var latitude=element.latlng[0];
                         var long=element.latlng[1];
//console.log(element.latlng)
                          //  countrytemp(element.name,element.latlng[0],element.latlng[1]);
                            countrytemp(name,latitude,long);
//     //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=9bd736a52150f457228ec1a8df8489f6;     
//    // api.openweathermap.org/data/2.5/weather?lat=33&lon=65&appid=9bd736a52150f457228ec1a8df8489f6
}
   }

 }
function countrytemp(name,latitude,long){
// console.log(name);
// console.log(latitude);
// console.log(long)
 var req2 =new XMLHttpRequest();
 //var url='http:api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+long+'&appid=9bd736a52150f457228ec1a8df8489f6';
 var url='http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+long+'&appid=9bd736a52150f457228ec1a8df8489f6&units=metric';
 req2.open('GET',url,true);

 req2.send();


req2.onload=function(){
  var data=JSON.parse(this.response);
  //console.log(data);
  for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
          const element = data[key];
          console.log(data.name,data.main['temp']);
          
      }
  }
                           // countrytemp(element.name,element.latlng[0],element.latlng[1]);
//     //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=9bd736a52150f457228ec1a8df8489f6;     
//    // api.openweathermap.org/data/2.5/weather?lat=33&lon=65&appid=9bd736a52150f457228ec1a8df8489f6
}
   }

 







