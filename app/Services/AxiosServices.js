
//  API - Weather  
export const weatherApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/weather",
    timeout: 10000
})
// export const weatherApi = axios.create({ 
//     baseURL: "https://api.weather.gov/points/43.6135,-116.2035",
//     timeout: 10000
// })

//  API - Quotes
export const quotesApi = axios.create({
    baseUrl: "https://bcw-sandbox.herokuapp.com/api/quotes",
    timeout: 10000
})
// export const quotesApi = axios.create({
//     baseURL: "https://zenquotes.io/api/today",
//     timeout: 10000
// })

//  API - Images
export const imagesApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/images",
    timeout: 10000
})
// export const imagesApi = axios.create({
//     baseURL: "",
//     timeout: 10000
// })

// API - YOURNAME/todos
export const userApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/joseph/todos",
    timeout: 10000
})
