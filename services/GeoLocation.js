

export default class GeoLocationService {


    getCurrentLocation(navigator, callback){
        var coordenates = {
            longitude : null,
            latitude : null,
            error : null
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                coordenates.longitude = position.coords.longitude;
                coordenates.latitude = position.coords.latitude;
                callback(coordenates);
            },
            (error) => {
                coordenates.error = error.message;
                callback(coordenates);
            },
            { enableHighAccurency: true, timeout: 20000, maximumAge: 1000}
        );
    }
}