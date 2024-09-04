import Navbar from './Components/Navbar'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import CraetePost from './Components/CraetePost'
import AllData from './Components/AllData'
import Edit from './Components/Edit'

function App() {

  return (
  <>
  <BrowserRouter>
  <div className="mb-36 md:mb-28">
   <Navbar/>
   </div>
  <Routes>
    <Route path="/" element={<CraetePost/>}/>
    <Route path="/data" element={<AllData/>}/>
    <Route path="/:id" element={<Edit/>}/>
  </Routes>
  </BrowserRouter>
  
  </>
  )
}

export default App
