import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Welcome from './pages/Welcome'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

export default  function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/api/v1/welcome' element={<Welcome/>}/>
      <Route path='/api/v1/signup' element={<Signup/>}/>
      <Route path='/api/v1/signin' element={<Signin/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}