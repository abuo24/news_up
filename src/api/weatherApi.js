import axios from "axios"

export const weatherApi = {
    getWeather: (a,b) => {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=dea0d3a3704d669c7fe3818881b8ab89`)
    }
}