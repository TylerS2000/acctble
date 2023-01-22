import useField from "../hooks/useField"
import axios from "axios"
export default function CreateProfile(props) {
    const username = useField('text')
    const password = useField('text')
    const name = useField('text')
    
    const createProfile = async (event) => {
        event.preventDefault()
        const user = {
            username: username.value,
            password: password.value,
            name: name.value
        }
        const response = await axios.post("http://localhost:3001/api/user", user)
        console.log(response)
    }
    return(
        <div>
            <h1>Create Profile</h1>
            <h2>Username</h2>
            <input type={username.type} value={username.value} onChange={username.onChange}/>
            <h2>Password</h2>
            <input type={password.type} value={password.value} onChange={password.onChange}/>
            <h2>Name</h2>
            <input type={name.type} value={name.value} onChange={name.onChange}/>
            <button onClick={()=>props.setPage("login")}>Back</button>
            <button onClick={createProfile}>Create</button>
        </div>
    )
}
