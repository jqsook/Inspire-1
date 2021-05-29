export class Weather{
    constructor(data) {
        this.description = data.description
        this.icon = data.icon
        this.temp = data.temp




    }



    get template() {
         return /*htm*/`
    <div class="card" style="width: 18rem">
            <div class="card-body bg-dark">
              <h5 class="card-title text-light">Weather</h5>
              <p class="card-text text-light">${this.name} - ${this.icon}</p>
              <p class="card-text text-light">${this.temp}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            
                `}
}