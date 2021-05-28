import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js"

// Ref- https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format


// Clock in Nav bar
function drawClock() {
    let today = new Date();
    let time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    
    document.getElementById('time').value = time 
    // console.log(time)  This works
}


export default class WeatherController {
    constructor() {
        // console.log("controller is linked"); //This works
        drawClock()
        
        
    }
    
}







