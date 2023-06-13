
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Register from './screens/Register';
import Rating from './screens/Rating';
import Dashboard from './screens/Dashboard';
import Mentee from './screens/Mentee';
import Mentor from './screens/Mentor';
import Analytics from './screens/Analytics';


function App() {
  return (
    <BrowserRouter>    
     <Routes>    
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/> 
     <Route path='/register' element={<Register/>}/>
     <Route path='/rating' element={<Rating/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/mentee' element={<Mentee/>}/>
     <Route path='/mentor' element={<Mentor/>}/>
     <Route path='/analytics' element={<Analytics/>}/>
     </Routes>   
    </BrowserRouter>
   
  );
}

export default App;

