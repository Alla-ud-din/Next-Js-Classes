"use strict";
// The API is available at https://simple-books-api.glitch.me
// const url = 'https://simple-books-api.glitch.me'
// async function get(){
//     const res = await fetch(url)  // By default fetch send request using GET http method
//     // console.log(res)
//     const data = await res.json()
//     return data
// }
// get().then(data=>console.log(data))
// get()
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// <=======================================>
// GET /status
// Returns the status of the API.
// const url = 'https://simple-books-api.glitch.me/statu'
// async function getStatus(){
//     const res = await fetch(url)  // By default fetch send request using GET http method
//     if(!res.ok){
//         throw new Error(`Could not fetch, status ${res.status}`)
//     }
//     // console.log(res)
//     const data = await res.json()
//     return data
// }
// getStatus().then(data=>console.log(data)).catch(error=>console.log(error))
// getStatus()
// <===============================================>
// Promise all
function fetchMoviesAndCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        const [moviesResponse, categoriesResponse] = yield Promise.all([
            fetch('/movies'),
            fetch('/categories')
        ]);
        const movies = yield moviesResponse.json();
        const categories = yield categoriesResponse.json();
        return [movies, categories];
    });
}
fetchMoviesAndCategories().then(([movies, categories]) => {
    movies; // fetched movies
    categories; // fetched categories
}).catch(error => {
    // /movies or /categories request failed
});
fetchMoviesAndCategories();
