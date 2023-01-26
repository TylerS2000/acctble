import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import CreateProfile from './components/CreateProfile';
import './styles/app.css';
import { useState, useEffect } from 'react';
function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [posts, setPosts] = useState([]);
 
    useEffect(()=>{
      if(localStorage.getItem('user')){
        setUser(JSON.parse(localStorage.getItem('user')))
      }}
    ,[page])
  console.log(page);
  return (
<div>
      {page === "login" && <Login setUser={setUser} setPage={setPage} user={user}/>}
      {page === "home" && <Home user={user} setUser={setUser}  setPage={setPage} posts = {posts} setPosts={setPosts} page={page}/>}
      {page === "create profile" && <CreateProfile setUser={setUser} setPage={setPage}/>}
      {page === "profile" && <Profile user={user} setUser={setUser} setPage={setPage}/>}
</div>
  );
}

export default App;
