
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Register from './screens/Register';
import Rating from './screens/Rating';
import Dashboard from './screens/Dashboard';
import Mentor from './screens/Mentor';
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
import ManagerRequestUser from './screens/ManagerRequestUser';
import ManagerRequestMentor from './screens/ManagerRequestMentor';
import EditRequestUser from './screens/EditRequestUser';
import UpdateUserProfile from './screens/UpdateUserProfile';
import UpdateCVMentor from './screens/UpdateCVMentor';
import Error from './screens/Error';
import ViewRatting from './screens/ViewRating';

import AddCv from './screens/AddCV';
import ManagerRatingUser from './screens/ManagerRatingUser';
import ManagerRatingMentor from './screens/ManagerRatingMentor';
import FogotPassword from './screens/FogotPassword';
import ManagerMentorRegist from './screens/ManagerMentorRegist';



function App() {

  return (
  
    
    <BrowserRouter>    
     <Routes>    
     <Route path='/fogotpass' element={<FogotPassword/>}/>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/> 
     <Route path='/register' element={<Register/>}/>
     <Route path='/rating/:id/:mentorId' element={<Rating/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/managerskill' element={<ManagerSkill/>}/>
     <Route path='/skill/add' element={<AddSkill/>}/>
     <Route path='/mentor' element={<Mentor/>}/>
     <Route path='/addcv' element={<AddCv/>}/>
     <Route path='/manager/rating' element={<ManagerRatingUser/>}/>
     <Route path='/managermentor/rating' element={<ManagerRatingMentor/>}/>
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
     <Route path='/requestuser/:id' element={<ManagerRequestUser/>}/>
     <Route path='/requestmentor/:mentorID' element={<ManagerRequestMentor/>}/>
     <Route path='/requestuser/edit/:id/:requestID/:mentorID' element={<EditRequestUser/>}/>
     <Route path='/update/userprofile' element={<UpdateUserProfile/>}/>
     <Route path='/update/cvmentor' element={<UpdateCVMentor/>}/>
     <Route path='/error' element={<Error/>}/>
     <Route path="/*" element={<Error />}/>
     <Route path='/view/ratting' element={<ViewRatting/>}/>
     <Route path='/manager/regist' element={<ManagerMentorRegist/>}/>
     
     </Routes>   
    </BrowserRouter>
   
  );
}

export default App;

