import axios from "axios";

export default function getPostsSingleUser(userId,setUserPosts) {
    axios.get(
        `/api/user/${userId}`
    ).then((response) => {
        setUserPosts(response.data);
    }
    ).catch((error) => {
        console.log(error);
    })
    }