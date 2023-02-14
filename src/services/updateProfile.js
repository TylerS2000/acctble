import axios from "axios";
export default function updateProfile(profile,token,setUser) {
    const config = {
        headers: { Authorization: "bearer " +token},
      }
      console.log(token);
      let user=  JSON.parse(localStorage.getItem("user"))
      console.log(user);
    axios
        .put(`/api/user/${user._id}`, profile, config)
        .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        })
        .catch((error) => {
        console.log(error);
        return
        });
        
    }
