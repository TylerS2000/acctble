import Login from './components/Login';
import Home from './components/Home';
import CreateProfile from './components/CreateProfile';
import './styles/app.css';
import { useState } from 'react';
function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [posts, setPosts] = useState([]);
  console.log(user)
  return (
<div>
      {page === "login" && <Login setUser={setUser} setPage={setPage} user={user}/>}
      {page === "home" && <Home user={user} setPage={setPage} posts = {posts} setPosts={setPosts} page={page}/>}
      {page === "create profile" && <CreateProfile setUser={setUser} setPage={setPage}/>}
</div>
  );
}

export default App;
