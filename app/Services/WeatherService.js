import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { weatherApi } from "./AxiosServices.js"



class WeatherService{
    
    async getWeather() {
            console.log('show me the weather')
            let res = await weatherApi.get()
            console.log("You are in weather services", res.data.results)
            res.data.results.forEach(w => {
                ProxyState.weathers.push(new Weather(w))
            })
            ProxyState.weathers = ProxyState.weathers
    }
}


export const weatherService = new WeatherService()