
export class Quote{
    constructor(data) {
        this.content = data.content
        this.author = data.author
    }
    
    get template() {
        return /*html*/
        `
        <!-- Quote Box -->
<div>
  <p class="text-light">
    Quote of the day
  </p>
  <p class="text-light">
    Author
  </p>
</div> 
        
        
        
        `
    }
}