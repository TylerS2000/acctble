import Login from './components/Login';
import './styles/app.css';
import { useState } from 'react';
function App() {
  const [user, setUser] = useState(null);
  console.log(user)
  return (
<div>
  {user ? <h1>Welcome {user.username}</h1> : <Login setUser={setUser}/>}
</div>
  );
}

export default App;
