import React from 'react'
import Navber from './components/Navber'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Home/>}/>
      </Routes>
      <Navber/>
    </div>
  )
}

export default App
