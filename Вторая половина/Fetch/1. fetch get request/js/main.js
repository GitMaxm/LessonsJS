// http://jsonplaceholder.typicode.com/posts

// ----------------------------------------------
// GET запрос на получение данных
// ----------------------------------------------
fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        console.log(res);
        if (res.ok){
            console.log("SUCCESS!");
            return res.json()
        } else {
            console.log("NOT successful. Error!");
        }
    })
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
