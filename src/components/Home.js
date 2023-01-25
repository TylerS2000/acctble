import getPosts from "../services/getPosts"
import React, {useEffect,useState} from "react"
import Post from "./Post"
import "../styles/Home.css"
import Navbar from "./Navbar"
export default function Home(props) {
    const [popUp, setPopUp] = useState(false)
    const user = props.user
    const posts = props.posts
    useEffect(()=>getPosts(props.setPosts), [props.page, props.setPosts])
    return(
    <div className="home-wrapper">
        <Navbar setPage={props.setPage} setUser={props.setUser}/>
        <div className="home">
            
           {posts.map((post)=>(
               <div className="post" key={post.id}>
                <div className="user">
                    <img src="https://www.computerhope.com/jargon/g/guest-user.png" alt="profile pic"/>
                    <h3>{post.user.username}</h3>
                </div>
                    <h5>Current Goal: Run a Marathon</h5>
                     <p>{post.content}</p>
                </div>))}
                <button className="post-btn" onClick={()=>setPopUp(!popUp)}>Post</button>
                <Post token = {user.token} setPosts={props.setPosts} popUp={popUp} setPopUp={setPopUp}/>
        </div>
    </div>
    )
}