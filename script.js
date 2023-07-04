function myKey(event){
    x=event.code
    if(x == "Enter"){
        console.log(x);
        searchPlace()
    }

}
function searchPlace() {
    cityName = cityname.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)
        .then(data => data.json())
        .then(data => displayData(data))
    

    function displayData(wData) {

        country = wData.sys.country
       // console.log(country);
        humidity = wData.main.humidity
        wind = wData.wind.speed
        pressure = wData.main.pressure
        temp = eval(wData.main.temp - 273.15).toFixed()
        //console.log(temp);
        feel = eval(wData.main.feels_like - 273.15).toFixed()
        city = wData.name
        description = wData.weather[0].description


        country1.innerHTML = `
    <label class="text-black">Country</label>
    <p class="text-white">${country}</p>
`
        humidity1.innerHTML = `
<label class="text-black">Humidity</label>
<p class="text-white">${humidity}%</p>
`
        wind1.innerHTML = `
<label class="text-black">Wind</label>
<p class="text-white">${wind}kmph</p>
`
        pressure1.innerHTML = `
<label class="text-black">Pressure</label>
<p class="text-white">${pressure}</p>
`
        temp1.innerHTML = `
<label class="text-dark fw-bold" style="font-size:25px;font-style:bold;font-weight:500;">${temp}℃,

<span class="text-dark fw-bold" style="font-size:15px">${description}</span>
</label>
<p class="text-dark fw-bold" style="font-size:15px;">feels like ${feel}℃</p>
`
        cName.innerHTML = `
<h4 class="text-dark fw-bold" style="font-weight:400;">${city}</h4>
<p class="text-dark fw-bold" style="font-size:15px;">${Date()}</p>`

    }
}

function clearData(){
    cityname.value = ""
    country1.innerHTML = `
        <p class="text-black">Country</p>`
    humidity1.innerHTML = `
        <p class="text-black">Humidity</p>`
    wind1.innerHTML = `
        <p class="text-black">Wind</p>`
    pressure1.innerHTML = `
        <p class="text-black">Pressure</p>`
    temp1.innerHTML = `
        <label class="fs-6">Temperature</label>
        `
    cName.innerHTML = `<h5>City Name</h5>`



}





