const clientId = '05529b74d3b6381931e4';
const clientSecret = '562f9411b5a3bf2222c8985f67d578368cd70a6f';


const fetchUser = (url) => {
    fetch(url)
        .then(data => data.json())
        .then((resp) => {
            console.log(resp)
            // const output = document.querySelector('.output');
            // output.innerHTML = `<h1>${resp.name}</h1>`

        })
}


fetchUser(`https://api.github.com/users/msmatki?client_id${clientId}=&client_secret=${clientSecret}`);