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
    console.log(singleUser.posts);
    const posts = singleUser.posts
    return (
        <div>
        <Navbar setPage={props.setPage}/>
        <div className="profile">
            <h1>Profile</h1>
            <h2>Username: {props.user.username}</h2>
            {posts && posts.map((post)=>(
                    <div className="post" key={post.id}>
                     <div className="user">
                         <img src="https://www.computerhope.com/jargon/g/guest-user.png" alt="profile pic"/>
                         <h3>{props.user.username}</h3>
                     </div>
                         <p className="date">{post.date}</p>
                         <h4>Current Goal: Run a Marathon</h4>
                          <p>{post.content}</p>
                         
                     </div>))}
            
        </div>
        </div>
    )
}