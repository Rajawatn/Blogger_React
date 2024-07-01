import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Dashboard from './Dashboard'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App
