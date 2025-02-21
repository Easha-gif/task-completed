
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Shared/Navbar'
import Footer from './components/Shared/Footer'

function App() {

  return (
    <>
<Navbar></Navbar>
<div className='min-h-screen'>
  <Outlet></Outlet>
</div>
<Footer></Footer>
    </>
  )
}

export default App
