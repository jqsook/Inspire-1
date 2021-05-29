import ValuesController from "./Controllers/ValuesController.js";

import WeatherController from "./Controllers/WeatherController.js"

import QuotesController from "./Controllers/QuotesController.js"

import ImagesController from "./Controllers/ImagesController.js"

import TODOController from "./Controllers/TODOController.js"

class App {
  valuesController = new ValuesController();
  
  weatherController = new WeatherController()

  quotesController = new QuotesController()

  imagesController = new ImagesController()

  todoController = new TODOController()

}

window["app"] = new App();
