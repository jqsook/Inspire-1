import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { imagesApi } from "./AxiosServices.js"

class ImagesService {
    constructor() {
        console.log("Image Services")
        //     async getImage() {
        //         console.log("You image is in the services")
        //         let res = await imagesApi.get()
        //         console.log(res.data.results)
        //         res.data.result.forEach(i => {
        //         ProxyState.images.push(new Image(i))
            
        //         });
        //         ProxyState.images = ProxyState.images
        //     }
        // }
        //  export const imagesService = new ImagesService()
    }
}