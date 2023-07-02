function searchPlace() {
    place = place.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)
        .then(data => data.json())
        .then(data => displayData(data))
    console.log(data);

    function displayData(wData) {

        country = wData.sys.country
       // console.log(country);
        humidity = wData.main.humidity
        wind = wData.wind.speed
        pressure = wData.main.pressure
        temp = eval(wData.main.temp - 273.15).toFixed()
        console.log(temp);
        feel = eval(wData.main.feels_like - 273.15).toFixed()
        place = wData.name
        description = wData.weather[0].description


        country1.innerHTML = `
    <label class="text-black">Country</label>
    <p class="text-black">${country}</p>
`
        humidity1.innerHTML = `
<label class="text-black">Humidity</label>
<p class="text-black">${humidity}%</p>
`
        wind1.innerHTML = `
<label class="text-dark">Wind</label>
<p class="text-black">${wind}kmph</p>
`
        pressure1.innerHTML = `
<label class="text-dark">Pressure</label>
<p class="text-black">${pressure}</p>
`
        temp1.innerHTML = `
<label style="font-size:25px;font-style:bold;font-weight:500;">${temp}℃,

<span style="font-size:11px">${description}</span>
</label>
<p style="font-size:12px;">feels like ${feel}℃</p>
`
        cName.innerHTML = `
<h4 style="font-weight:400;">${place}</h4>
<p style="font-size:13px;">${Date()}</p>`

    }
}
function refresh() {
    place.value = ""
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



