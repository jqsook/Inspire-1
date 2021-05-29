import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { quotesApi } from "./AxiosServices.js"

class QuotesService{
    async getQuote() {
        console.log("Your get quote service is up")
        // debugger
        let res = await quotesApi.get()//There is an issue here
        console.log(res.data.results)
        res.data.result.forEach(q => {
            ProxyState.quotes.push(new Quote(q))
        });
        ProxyState.quotes = ProxyState.quotes

    }




}

export const quotesService = new QuotesService()