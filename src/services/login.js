import axios from 'axios';
export default function login({username, password},setUser){
    axios.post('http://localhost:3001/api/login', {username, password})
    .then((response) => {
        console.log(response)
        localStorage.setItem('user', JSON.stringify(response.data))
        setUser(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
   
}