const weather_api = async() => {
    const location = document.getElementById("search_bar").value;   // Extracts the value from search bar...
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=fe0dba6abc0c4755b9f185936231405&q=${location}&aqi=yes`);   //Data from api in form of promise...
        const jsonData = await response.json(); // Convert promise to json
        document.getElementById("alert").innerHTML = `<div class="text-center alert alert-success alert-dismissible fade show" role="alert"><strong>Showing details for ${location}</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;    // Return success alert
        setTimeout(()=>{
            document.getElementById("alert").innerHTML =""
        },3000)
        let add = jsonData.location.name +", " +  jsonData.location.region + ", " + jsonData.location.country   //Stores Value of specific data to be updated
        let temp = jsonData.current.temp_c  //Stores Value of specific data to be updated
        let cloud = jsonData.current.condition.text //Stores Value of specific data to be updated
        let icon =jsonData.current.condition.icon   //Stores Value of specific data to be updated
        let co = jsonData.current.air_quality.co.toString() //Stores Value of specific data to be updated
        let no2 = jsonData.current.air_quality.no2.toString()   //Stores Value of specific data to be updated
        let o = jsonData.current.air_quality.o3.toString()  //Stores Value of specific data to be updated
        let so2 = jsonData.current.air_quality.so2.toString()   //Stores Value of specific data to be updated
        let pm25 = jsonData.current.air_quality.pm2_5.toString()    //Stores Value of specific data to be updated
        let pm10 = jsonData.current.air_quality.pm10.toString() //Stores Value of specific data to be updated
        document.getElementById("temperature").innerHTML=temp+" °C" // Performs DOM Manipulation
        document.getElementById("cloud").innerHTML=cloud    // Performs DOM Manipulation
        document.getElementById("weathericon").setAttribute("src",icon) // Performs DOM Manipulation
        document.getElementById("weathericon").setAttribute("class","card-img-top container")   // Performs DOM Manipulation
        document.getElementById("address").innerHTML = add  // Performs DOM Manipulation
        document.getElementById("co").innerHTML = co.slice(0,6) // Performs DOM Manipulation
        document.getElementById("no").innerHTML = no2.slice(0,6)    // Performs DOM Manipulation
        document.getElementById("o").innerHTML = o.slice(0,6)   // Performs DOM Manipulation
        document.getElementById("so").innerHTML = so2.slice(0,6)    // Performs DOM Manipulation
        document.getElementById("pm25").innerHTML = pm25.slice(0,6) // Performs DOM Manipulation
        document.getElementById("pm10").innerHTML = pm10.slice(0,6) // Performs DOM Manipulation
    }
    catch(err){
        document.getElementById("alert").innerHTML = `<div class="text-center alert alert-danger alert-dismissible fade show" role="alert"><strong>Can't find results for : ${location}</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;    // Return failure alert
        setTimeout(()=>{
            document.getElementById("alert").innerHTML =""
        },2000)
    }
}
