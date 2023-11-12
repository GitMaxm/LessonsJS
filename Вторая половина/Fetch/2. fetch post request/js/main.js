// http://jsonplaceholder.typicode.com/posts

// ----------------------------------------------
// GET запрос на получение данных
// ----------------------------------------------
// fetch('http://jsonplaceholder.typicode.com/posts654654')
//     .then(res=>{
//         console.log(res);
//         if (res.ok){
//             console.log("SUCCESS!");
//             return res.json()
//         } else {
//             console.log("NOT successful. Error!");
//         }
//     })
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error))

// ----------------------------------------------
// POST запрос на отправку данных
// ----------------------------------------------

const data = {
    title: 'Nice title',
    body: 'Lorem ipsum dolor sit amet',
    userId: 9
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
})
.then(res=>res.json())
.then(data=>console.log(data))