
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Register from './screens/Register';
import Rating from './screens/Rating';
import Dashboard from './screens/Dashboard';
import Mentor from './screens/Mentor';
import Analytics from './screens/Analytics';
import Profile from './screens/Profile';
import ListMentee from './screens/ListMentor';
import ProfileUser from './screens/ProfileUser';
import AddSkill from './screens/AddSkill';
import ChangePass from './screens/ChangePassword';
import EditSkill from './screens/EditSkill';
import ManagerUser from './screens/MannagerUser';
import ManagerRequest from './screens/ManagerRequest';
import AddRequest from './screens/AddRequest';
import ManagerSkill from './screens/ManagerSkill';
import MentorCV from './screens/MentorCV';
import ListMentorSkill from './screens/ListMentorSkill';



function App() {
  return (
  
    
    <BrowserRouter>    
     <Routes>    
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/> 
     <Route path='/register' element={<Register/>}/>
     <Route path='/rating' element={<Rating/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/managerskill' element={<ManagerSkill/>}/>
     <Route path='/skill/add' element={<AddSkill/>}/>
     <Route path='/mentor' element={<Mentor/>}/>
     <Route path='/analytics' element={<Analytics/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/listmentor' element={<ListMentee/>}/>
     <Route path='/11' element={<ProfileUser/>}/>
     <Route path='/changepass' element={<ChangePass/>}/>
     <Route path='/skill/edit/:id' element={<EditSkill/>}/>
     <Route path='/managerrequest' element={<ManagerRequest/>}/>
     <Route path='/request/add/:mentorID/:id' element={<AddRequest/>}/>
     <Route path='/manageruser' element={<ManagerUser/>}/>
     <Route path='/mentor/cv/:userid' element={<MentorCV/>}/>
     <Route path='/listmentor/skill/:userid' element={<ListMentorSkill/>}/>
     


     </Routes>   
    </BrowserRouter>
   
  );
}

export default App;

