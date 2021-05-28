export default class Weather{
    constructor(data) {
        this.name = data.name
        this.icon = data.weather.icon
        this.temp = data.main.temp




    }



    get template() {
         return /*htm*/`
    <div class="card" style="width: 18rem">
            <div class="card-body bg-dark">
              <h5 class="card-title text-light">Weather</h5>
              <p class="card-text text-light">Some quick example text</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            
                `}
}