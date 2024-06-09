//var time_stamp = + new Date();
//var publicKey = '96dedff1ddd55d0255ac5563aaa738f1';
//var privateKey = 18efaa8bc030bd9f142e482e9e46901677678647b96dedff1ddd55d0255ac5563aaa738f1;
//var hash_val = 5fed26f8659df57479c4441675f5135c
//https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=0&apikey=96dedff1ddd55d0255ac5563aaa738f1
let offset = 10
let limit = 10
let url = `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=${offset}&ts=1&apikey=96dedff1ddd55d0255ac5563aaa738f1&hash=5fed26f8659df57479c4441675f5135c`
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))

//search request
let query = 'bat';
let searchUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=${offset}&ts=1&apikey=96dedff1ddd55d0255ac5563aaa738f1&hash=5fed26f8659df57479c4441675f5135c`
fetch(searchUrl,{
    method: 'GET',
    body: JSON.stringify({
        nameStartsWith: query
    })
})
    .then(res => res.json())
    .then(data => console.log(data))