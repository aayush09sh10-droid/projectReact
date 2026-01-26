import Login from "./Component/Login";
import Profile from "./Component/Profile";
import { useState } from "react";
import './App.css'
import UserContext from './context/userContext'
import UserContextProvider from "./context/UserContextProvider";

function App() {
  

  return (<>
  <h1>Mini Context App</h1>
    <UserContextProvider>
      
      <Login/>
      <Profile/>
      

      
    </UserContextProvider>
  </>
   
    
  )
}

export default App
