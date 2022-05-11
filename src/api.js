const path = 'https://coronavirus-19-api.herokuapp.com/countries';

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country) {
    return fetch(`${path}/${country}`, headers)
    .then((response)=> response.json())
    .catch((error)=> alert(error.message));
}

export default {
    getCountry
}