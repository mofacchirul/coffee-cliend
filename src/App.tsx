
import { Outlet } from 'react-router-dom'
import './App.css'
import Navar from './components/Shared/Navar'
import Footer from './components/Shared/Footer'


function App() {
  

  return (
   <div >
     <Navar></Navar>
  <main className='min-h-screen'>  <Outlet  ></Outlet></main>
    <Footer></Footer>
   </div>

  )
}

export default App
