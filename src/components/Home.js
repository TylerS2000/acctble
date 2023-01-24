import getPosts from "../services/getPosts"
import React, {useEffect} from "react"
export default function Home(props) {
    const user = props.user
    const posts = props.posts

    useEffect(()=>getPosts(props.setPosts), [props.page])
    return(
        <div>
            <h1  style={{color:"white"}}>Welcome {user.username}</h1>
           {posts.map((post)=>(
               <div key={post.id}>
                     <h2>{post.content}</h2>
                </div>))}

            
        </div>
    )
}