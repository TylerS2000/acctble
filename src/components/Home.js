import getPosts from "../services/getPosts"
import React, {useEffect} from "react"
import Post from "./Post"
export default function Home(props) {
    const user = props.user
    const posts = props.posts

    useEffect(()=>getPosts(props.setPosts), [props.page, props.setPosts])
    return(
        <div>
            <h1  style={{color:"white"}}>Welcome {user.username}</h1>
           {posts.map((post)=>(
               <div key={post.id}>
                    <p>{post.user}</p>
                     <h2>{post.content}</h2>
                </div>))}

                <Post token = {user.token}/>
        </div>
    )
}