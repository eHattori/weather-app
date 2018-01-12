export default class OpenWeatherService {


    getCurrentWeather(lon, lat, callback){

        var weather = {
            error: null,
            main: null,
            description : null,
            temp: 0
        };

        fetch('https://api.openweathermap.org/data/2.5/weather?lang=pt&APPID=ccae832619e1f4ac15ae5be537c91b87&units=imperial&lat='+ lat +'&lon=' + lon)
            .then((res) => res.json())
            .then((resJSON) =>{                
                callback({ 
                    main : resJSON.weather[0].description,
                    description : resJSON.weather[0].main,
                    temp: resJSON.main.temp,
                    city: resJSON.name,
                    min: resJSON.main.temp_min,
                    max: resJSON.main.temp_max,
                    icon : resJSON.weather[0].icon
                });
            })
            .catch(error => { callback({ error : error.message }); });        
    }
}