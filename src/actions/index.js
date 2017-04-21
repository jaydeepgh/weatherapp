import axios from 'axios';
const API_KEY = '1ef0e636cc491badb7b713d53e69683d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const CALL_API = 'CALL_API';

export function fetchWeather(city)
{
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    //console.log('Request : ',request);

    return{
        type : FETCH_WEATHER,
        payload: request
    };
}

export function callApi(data)
{
    console.log(data.name);
    const url = 'https://getstartednode-nonlayered-photosynthate.mybluemix.net/api/visitors'
    //let request = null; 
    
    const request = axios.post(url, data).then((response)=>{return response;}).catch((err) => {
        //console.log(err);
        return {data : data.name}; 
    });
    console.log(request);
    
    return{
        type : CALL_API,
        payload : request
    }
}