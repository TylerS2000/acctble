import useField from "../hooks/useField"
import axios from "axios"
import React from "react"
import "../styles/CreateProfile.css"
export default function CreateProfile(props) {
    const username = useField('text')
    const password = useField('text')
    const confirm = useField('text')
    const [error, setError] = React.useState(null)
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
        try{
        const response = await axios.post("/api/user", user)
        props.setPage("login")
        }
        catch(e){
            console.log(e)
            setError("Username already exists")
            setTimeout(()=>setError(null), 2000)
        }
    }
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
            <h2>{error}</h2>
            
        </div>
    )
}
