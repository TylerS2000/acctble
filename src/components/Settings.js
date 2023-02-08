import Navbar from "./Navbar"
import "../styles/Settings.css"
import updateProfile from "../services/updateProfile";
export default function Settings(props){
    const profile = {
        "bio": "I am a bio",
        "pic":"https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/09/pict-painting-of-warrior.jpg"
    }
        console.log(props.user.token);
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
            <button className="logout" onClick={()=>updateProfile({})}>Submit</button>
            <button className="logout" onClick={()=>{localStorage.clear(); props.setUser(null); props.setPage("login")}}>Logout</button>
        </div>
    )
}
