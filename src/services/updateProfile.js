import axios from "axios";
export default function updateProfile(setProfile, profile,token) {
    const config = {
        headers: { Authorization: "bearer " +token},
      }
      console.log(token);
      let user=  JSON.parse(localStorage.getItem("user"))
      console.log(user);
    axios
        .put(`http://localhost:8080/api/user/${user._id}`, profile,config)
        .then((response) => {
        console.log(response);
        })
        .catch((error) => {
        console.log(error);
        });
    }
