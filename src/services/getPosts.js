import axios from "axios";

export default function getPosts(setPosts) {
    axios
        .get("http://localhost:8080/api/posts")
        .then((response) => {
        console.log(response);
        setPosts(response.data,()=>{console.log("posts set")});
        })
        .catch((error) => {
        console.log(error);
        });
    }