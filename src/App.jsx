import { useState } from 'react'
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import './App.css'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <>
    <div className="Main_container">
      {auth ? <Dashboard/> : <Login auth={setAuth}/>}
    </div>
    </>
  )
}

export default App
