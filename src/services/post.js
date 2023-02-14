import axios  from "axios";
export default function post(content, token) {
    const config = {
        headers: { Authorization: "bearer " +token},
      }
    axios
        .post("/api/posts", content, config)
        .then((response) => {
        })
        .catch((error) => {
        console.log(error);
        });
    }
