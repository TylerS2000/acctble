import axios from 'axios';
export default function login({username, password},setUser,setError){
    axios.post('/api/login', {username, password})
    .then((response) => {
        console.log(response)
        localStorage.setItem('user', JSON.stringify(response.data))
        setUser(response.data)
    })
    .catch((error) => {
        console.log(error)
        setError("Invalid Username or Password")
        setTimeout(()=>setErrorf(null), 1000)
    })
   
}