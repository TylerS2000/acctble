import Login from './components/Login';
import Home from './components/Home';
import './styles/app.css';
import { useState } from 'react';
function App() {
  const [user, setUser] = useState(null);
  console.log(user)
  return (
<div>
  {user ? <Home user={user}/> : <Login setUser={setUser}/>}
</div>
  );
}

export default App;
