import axios from 'axios';
export default function login({username, password},setUser,setError){
    axios.post('http://localhost:8080/api/login', {username, password})
    .then((response) => {
        console.log(response)
        localStorage.setItem('user', JSON.stringify(response.data))
        setUser(response.data)
    })
    .catch((error) => {
        console.log(error)
        setError("Invalid Username or Password")
        setTimeout(()=>setError(null), 1000)
    })
   
}