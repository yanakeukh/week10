const ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

fetch(ENDPOINT)
.then(res => res.json())
.then(res=> {
    res.forEach(houses=> console.log(houses));
})


fetch(ENDPOINT, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',

    },
    body: JSON.stringify({
        name: 'Fetch House'
    })

}
)