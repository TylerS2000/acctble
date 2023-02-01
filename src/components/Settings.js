import Navbar from "./Navbar"
import "../styles/Settings.css"
import updateProfile from "../services/updateProfile";
export default function Settings(props){
    const profile = {
        "bio": "I am a bio",
        "pic":"pic"}
updateProfile(profile, props.user.token);
    return(
        <div className="settings">
            <Navbar setPage={props.setPage} setUser={props.setUser}/>
            <h1>Settings</h1>
            <h2>Edit Profile</h2>
            <h2>Profile Picture</h2>
            <input placeholder="URL"></input>
            <h2>Bio</h2>
            <textarea/>
            <button className="logout" onClick={()=>{localStorage.clear(); props.setUser(null); props.setPage("login")}}>Logout</button>
        </div>
    )
}
