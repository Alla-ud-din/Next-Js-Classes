// The API is available at https://simple-books-api.glitch.me
// const url = 'https://simple-books-api.glitch.me'
// async function get(){
//     const res = await fetch(url)  // By default fetch send request using GET http method
//     // console.log(res)
//     const data = await res.json()
//     console.log(data)
// }
// get()

// const { access } = require("fs")


// <=======================================>
// GET /status
// Returns the status of the API.
// const url = 'https://simple-books-api.glitch.me/status'
// async function getStatus(){
//     const res = await fetch(url)  // By default fetch send request using GET http method
//     if(!res.ok){
//         throw new Error(`Could not fetch, status ${res.status}`)
//     }
//     // console.log(res)
//     const data = await res.json()
//     console.log(data)
// }
// getStatus()

// <===========================================>
// GET /books
// Returns a list of books.
// const url = 'https://simple-books-api.glitch.me/books'
// async function getBooks(){
//     const res = await fetch(url)  // By default fetch send request using GET http method
//     if(!res.ok){
//         throw new Error(`Could not fetch, status ${res.status}`)
//     }
//     // console.log(res)
//     const data = await res.json()
//     console.log(data)
// }
// getBooks()

// <================================================>
// Optional query parameters:
// type: fiction or non-fiction
// limit: a number between 1 and 20.
// const url = 'https://simple-books-api.glitch.me/books'
// const queryParams = {
//     type: 'fiction',
//     limit: '2'
// }
// const urlWithParams = new URL(url);
// console.log(urlWithParams);
// Object.keys(queryParams).forEach(key=>urlWithParams.searchParams.append(key,queryParams[key]))
// async function getBooks(){
//     const res = await fetch(urlWithParams)  // By default fetch send request using GET http method
//     if(!res.ok){
//         throw new Error(`Could not fetch, status ${res.status}`)
//     }
//     // console.log(res)
//     const data = await res.json()
//     console.log(data)
// }
// getBooks()

// <===========================================>
// GET /books/:bookId
// Retrieve detailed information about a book
// const id = '2'
// const url = `https://simple-books-api.glitch.me/books/${id}`
// async function getBookById(){
//     const res = await fetch(url)  // By default fetch send request using GET http method
//     // console.log(res)
//     const data = await res.json()
//     console.log(data)
// }
// getBookById()

// <==============================================>
// POST /orders
// Allows you to submit a new order. Requires authentication.
// The request body needs to be in JSON format and include the following properties:
// bookId - Integer - Required
// customerName - String - Required

// First we get accessToken
// const url = 'https://simple-books-api.glitch.me/api-clients'
// const user = {
//     clientName: 'ali',
//     clientEmail: 'ali123@gmail.com'
// }
// async function getToken() {
//     const res = await fetch(url, {
//         method: 'Post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)  //JSON.stringify to convert user object into JSON format
//     })
//     if (!res.ok) {
//         throw new Error(`Could not fetch, status ${res.status}`)
//     }
//     // console.log(res)
//     const data = await res.json()
//     console.log(data)
// }
// getToken();

const token = '552c7118a7898a78daf2bd7767b60676673e8a20f69070f453455ef9666504af'

// const url = 'https://simple-books-api.glitch.me/orders'
// async function postOrder() {
//     const res = await fetch(url, {
//         method: 'Post',
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "bookId": 3,
//             "customerName": "John"
//         })  // can place object items here or make other variable and use here like in last example
//     })
//     if (!res.ok) {
//         throw new Error(`Could not fetch, status ${res.status}`)
//     }
//     // console.log(res)
//     const data = await res.json()
//     console.log(data)
// }
// postOrder();

// const orderId1 = 'rChqiM0YFai9Akj7-NqJY';
// const orderId2 = 'KcE6_8gPOA09k4UuLUOZS'
// <==============================================>
// GET /orders
// Allows you to view all orders. Requires authentication.
// const url = 'https://simple-books-api.glitch.me/orders'
// async function getOrder() {
//     const res = await fetch(url, {
//         method: 'GET',
//         headers: {
//             'Authorization': `Bearer ${token}`,
//         }
//     })
//     if (!res.ok) {
//         throw new Error(`Could not fetch, status ${res.status}`)
//     }
//     // console.log(res)
//     const data = await res.json()
//     console.log(data)
// }
// getOrder();

// <===============================================>
// GET /orders/:orderId
// Allows you to view an existing order. Requires authentication.
// const url = `https://simple-books-api.glitch.me/orders/${orderId2}`
// async function getAnOrder() {
//     const res = await fetch(url, {
//         method: 'GET',
//         headers: {
//             'Authorization': `Bearer ${token}`,
//         }
//     })
//     if (!res.ok) {
//         throw new Error(`Could not fetch, status ${res.status}`)
//     }
//     // console.log(res)
//     const data = await res.json()
//     console.log(data)
// }
// getAnOrder();

// <===================================================>
// PATCH /orders/:orderId
// Update an existing order. Requires authentication.
// The request body needs to be in JSON format and allows you to update the following properties:
// customerName - String
// const url = `https://simple-books-api.glitch.me/orders/${orderId2}`
// const newCustomer = {
//     customerName: "Ali"
// }
// async function updateOrder() {
//     const res = await fetch(url, {
//         method: 'PATCH',
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newCustomer)
//     })
//     // if (!res.ok) {    we don't want these because server is not giving any response
//     //     throw new Error(`Could not fetch, status ${res.status}`)
//     // }
//     // // console.log(res)
//     // const data = await res.json()
//     // console.log(data)
// }
// updateOrder();

// <=====================================================>
// DELETE /orders/:orderId
// Delete an existing order. Requires authentication.
// const url = `https://simple-books-api.glitch.me/orders/${orderId1}`
// async function deleteOrder() {
//     const res = await fetch(url, {
//         method: 'Delete',
//         headers: {
//             'Authorization': `Bearer ${token}`,
//         }
//     })
//     // if (!res.ok) {    
//     //     throw new Error(`Could not fetch, status ${res.status}`)
//     // }
//     // // console.log(res)
//     // const data = await res.json()
//     // console.log(data)
// }
// deleteOrder();
