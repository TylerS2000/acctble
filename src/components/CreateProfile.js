import useField from "../hooks/useField"
import axios from "axios"
import "../styles/CreateProfile.css"
export default function CreateProfile(props) {
    const username = useField('text')
    const password = useField('text')
    const confirm = useField('text')
    
    const createProfile = async (event) => {
        event.preventDefault()
        const user = {
            username: username.value,
            password: password.value,
        }
        if (password.value !== confirm.value) {
            alert("Passwords do not match")
            return
        }
        else{
        const response = await axios.post("http://localhost:8080/api/user", user)}
    }
    return(
        <div className="profile-form">
            <h1>Create Profile</h1>
            <h2>Username</h2>
            <input type={username.type} value={username.value} onChange={username.onChange}/>
            <h2>Password</h2>
            <input type={password.type} value={password.value} onChange={password.onChange}/>
            <h2>Confirm Password</h2>
            <input type={confirm.type} value={confirm.value} onChange={confirm.onChange}/>
            <button onClick={createProfile}>Create</button>
            <button onClick={()=>props.setPage("login")}>Back</button>
            
        </div>
    )
}
