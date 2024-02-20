// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import './LoginPage.js'
import LoginPage from './Components/LoginPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './Components/RegistrationPage.jsx'
function App() {
return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/register' element={<RegistrationPage/>} />
      </Routes>
      </BrowserRouter>
      
  )
}

export default App
