import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import PageContant from './Components/PageContant/PageContant'

function App() {
  return (
     <div>
    <BrowserRouter>
    
    <Header/>
     <PageContant/>
     <Footer/>
    
    </BrowserRouter>


     </div>
  )
}

export default App
