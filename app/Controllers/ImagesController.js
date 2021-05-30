// import { ProxyState } from "../AppState.js"
import { imagesService } from "../Services/ImagesServices.js"


export default class ImagesController {
    constructor() {
        //console.log('Images controller linked')
        this.getImage()
    }

    getImage() {
        try {
            console.log('Image in the controller try')
            imagesService.getImage()
        } catch (error) {
            
        }
    }
}

