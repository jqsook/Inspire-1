import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js"

// Clock in Nav bar- used to keep time- now it only updates on refresh- move the drawfunction call???
function drawClock() {
    let today = new Date();
    let time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    
    document.getElementById('time').value = time 
    // console.log(time)  This works
}

export default class WeatherController {
    constructor() {
        
        // console.log("controller is linked"); //Works
        drawClock()
        //this.getWeather()
        
    }
        getWeather() {
            try {
                //console.log('Weather in controller try')
                weatherService.getWeather()
            } catch (error) {
                
            }
        }
        
}







