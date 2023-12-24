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

import { error } from "console"

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
async function fetchMoviesAndCategories() {
  const [moviesResponse, categoriesResponse] = await Promise.all([
    fetch('/movies'),
    fetch('/categories')
  ]);

  const movies = await moviesResponse.json();
  const categories = await categoriesResponse.json();

  return [movies, categories];
}

fetchMoviesAndCategories().then(([movies, categories]) => {
  movies;     // fetched movies
  categories; // fetched categories
}).catch(error => {
  // /movies or /categories request failed
});
fetchMoviesAndCategories();