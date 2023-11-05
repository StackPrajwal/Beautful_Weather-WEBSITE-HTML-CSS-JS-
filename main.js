// Storing data 

let key='706c68a3429c996d213a3dd43c20cc21';
let city= document.getElementById('city');
let desc= document.getElementById('desc');
let windspeed= document.getElementById('windspeed');
let hum= document.getElementById('hum');
let temp= document.getElementById('temp');


// for hiding and displaying contetn
function display() {
    let pre = document.getElementById('preload');
    pre.style.display = "none";

    let aft = document.getElementById('main');
    aft.style.display = "block";
    }

function display2(){
    
    let pre = document.getElementById('fetch');
    pre.style.display = "none";

    let aft = document.getElementById('info');
    aft.style.display = "block";
}

   setTimeout(display,2000);


// fetching data 
function fetchData()
{ 
        let cityname=document.getElementById('cityname');
        let citty =cityname.value;
    if(citty!='' )
    {
        
    // -----------------------------------------------
   
    console.log(key)
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${citty}&appid=${key}`;
    fetch(api).then(response=>response.json()).then(data=>{
        city.innerHTML=data.name;
        console.log(data.name)
        let err=data.name;
        if(err==undefined){
           
            error.innerHTML="Enter Valid City Name !!";
            console.log("wow");
        }
        else{
            display2();
        desc.innerHTML=data.weather[0].description;
        windspeed.innerHTML="Wind Speed : "+data.wind.speed;
        // hum.innerHTML=data.main.humidity;
        temp.innerHTML=(data.main.temp-273).toFixed(2)+"°";
   
        }     
    })
        
    }
    else{
        error.innerHTML="Enter City !!";
    }
}

