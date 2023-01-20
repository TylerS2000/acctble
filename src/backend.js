import axios from 'axios';
export default function login({username, password}){
    axios.post('http://localhost:3001/api/login', {username, password})
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
}