
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GuestLayout from './layouts/GuestLayout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import AutoService from './pages/AutoService';
import MotorGeneral from './pages/MotorGeneral';
import Diagnostic from './pages/Diagnostic';
import Maintence from './pages/Maintenance';
import Registration from './pages/Registration';

function App() {
  return (
   
    <Routes>
      <Route path='/' element={<GuestLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/autoservice' element={<AutoService/>}/>
        <Route path='/MotorGeneral' element={<MotorGeneral/>}/>
        <Route path='/Diagnostic' element={<Diagnostic/>}/>
        <Route path='/Maintence' element={<Maintence/>}/>
      </Route>
    </Routes>
  
  );
}

export default App;
