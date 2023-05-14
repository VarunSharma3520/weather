
const weather_api = async() => {
    const location = document.getElementById("search").value
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=fe0dba6abc0c4755b9f185936231405&q=`+location+`&aqi=yes`);
    const jsonData = await response.json();
    let add = await jsonData.location.name +", " +  await jsonData.location.region + ", " + await jsonData.location.country
    let temp = await jsonData.current.temp_c
    let cloud = await jsonData.current.condition.text
    let icon =await jsonData.current.condition.icon
    let co = await jsonData.current.air_quality.co.toString()
    let no2 = await jsonData.current.air_quality.no2.toString()
    let o = await jsonData.current.air_quality.o3.toString()
    let so2 = await jsonData.current.air_quality.so2.toString()
    let pm25 = await jsonData.current.air_quality.pm2_5.toString()
    let pm10 = await jsonData.current.air_quality.pm10.toString()
    document.getElementById("temperature").innerHTML=temp+" °C"
    document.getElementById("cloud").innerHTML=cloud
    document.getElementById("weathericon").setAttribute("src",icon)
    document.getElementById("weathericon").setAttribute("class","card-img-top container")
    document.getElementById("address").innerHTML = add
    document.getElementById("co").innerHTML = co.slice(0,6)
    document.getElementById("no").innerHTML = no2.slice(0,6)
    document.getElementById("o").innerHTML = o.slice(0,6)
    document.getElementById("so").innerHTML = so2.slice(0,6)
    document.getElementById("pm25").innerHTML = pm25.slice(0,6)
    document.getElementById("pm10").innerHTML = pm10.slice(0,6)
}
