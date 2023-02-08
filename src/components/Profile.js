import Navbar from "./Navbar"
import "../styles/Profile.css"
import "../styles/Home.css"
import getPostsSingleUser  from "../services/getPostsSingleUser"
import { useState,useEffect } from "react"
export default function Profile(props) {
    const [singleUser, setSingleUser] = useState([])
    useEffect(()=>{
    getPostsSingleUser(props.user._id,setSingleUser)
    },[])
    const posts = singleUser.posts
    const numberOfPosts = posts ? posts.length : 0
    console.log(
        posts
    );
    return (
        <div>
        <Navbar setPage={props.setPage} setUser={props.setUser}/>
        <div className="profile">
            <div className="profile-card">
            <div className="username-pic">
            <img src={props.user.pic||"https://www.computerhope.com/jargon/g/guest-user.png"} alt="profile pic" onerror="this.src='https://www.computerhope.com/jargon/g/guest-user.png';"/>
            <h2 className="username">{props.user.username}</h2>
            
            </div>
            <div className="bio">
            <h3>Number of Posts: {numberOfPosts}</h3>
            <p>{props.user.bio}</p>
            </div>
            </div>

            {posts && posts.map((post)=>(
                    <div className="post" key={post.id}>
                     <div className="user">
                         <img src={props.user.pic||"https://www.computerhope.com/jargon/g/guest-user.png"} alt="profile pic"/>
                         <h2>{props.user.username}</h2>
                     </div>
                         <p className="date">{post.date}</p>
                         <h3>Current Goal: {post.goal||"None"}</h3>
                          <p>{post.content}</p>
                         
                     </div>))}
            
        </div>
        </div>
    )
}