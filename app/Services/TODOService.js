import { ProxyState } from "../AppState.js"
import { TODO } from "../Models/TODO.js"
import { saveState } from "../Utils/LocalStorage.js"

class TODOService {
    constructor() {
        console.log("The service is up")
    }
}

export const todosService = new TODOService()