import getPosts from "../services/getPosts"
import React, {useEffect,useState} from "react"
import Post from "./Post"
import "../styles/Home.css"
import Navbar from "./Navbar"
export default function Home(props) {
    const [popUp, setPopUp] = useState(false)
    const user = props.user
    const posts = props.posts
    useEffect(()=>getPosts(props.setPosts), [popUp])
    function handleClick(){
        props.setPage("other user's profile")
    }
    return(
    <div className="home-wrapper">
        <Navbar setPage={props.setPage} setUser={props.setUser}/>
        <div className="home">
            
           {posts.map((post)=>(
               <div className="post" key={post.id}>
                <div className="user">
                    <img src={post.user.pic||"https://www.computerhope.com/jargon/g/guest-user.png"} alt="profile pic"/>
                    <h2 onClick={()=>{handleClick(); props.setViewingUser(post.user)}}>{post.user.username}</h2>
                </div>
                    <p className="date">{post.date}</p>
                    <h4>Current Goal: {post.goal||"None"}</h4>
                     <p>{post.content}</p>
                </div>))}
                <svg className="post-btn"onClick={()=>setPopUp(!popUp)} xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm7 11v4a1 1 0 0 1-2 0v-4H5a1 1 0 0 1 0-2h4V5a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2h-4z"></path></svg>
                <Post token = {user.token} setPosts={props.setPosts} popUp={popUp} setPopUp={setPopUp}/>
        </div>
    </div>
    )
}