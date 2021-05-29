import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"






export default class QuotesController {
    constructor() {
        //console.log('Quotes controller linked')
        //this.getQuote()
    
    }
    getQuote() {
        try {
            console.log("Quote in the controller try")
            quotesService.getQuote()
        } catch (error) {
        }
    }

}
