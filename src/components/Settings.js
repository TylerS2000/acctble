import Navbar from "./Navbar"
import "../styles/Settings.css"
import updateProfile from "../services/updateProfile";
import useField from "../hooks/useField";
export default function Settings(props){
    const bio = useField("text");
    const picUrl=useField("text");
    const profile = {
        "bio": bio.value,
        "pic":picUrl.value
    }
        console.log(bio.value);

    return(
        <div className="settings">
            <Navbar setPage={props.setPage} setUser={props.setUser}/>
            <h2>Profile Picture</h2>
            <input placeholder="URL" value={picUrl.value} onChange={picUrl.onChange}></input>
            <h2>Bio</h2>
            <textarea value={bio.value} onChange={bio.onChange}/>
            <button className="logout" onClick={()=>updateProfile(profile, props.user.token,props.setUser)}>Submit</button>
            <button className="logout" onClick={()=>{localStorage.clear(); props.setUser(null); props.setPage("login")}}>Logout</button>
        </div>
    )
}
