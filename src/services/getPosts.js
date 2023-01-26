import axios from "axios";

export default function getPosts(setPosts) {
    axios
        .get("http://localhost:8080/api/posts")
        .then((response) => {
        console.log(response);
        setPosts(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
    }