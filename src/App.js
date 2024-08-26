
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GuestLayout from './layouts/GuestLayout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<GuestLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='login' element={<Login/>}/>
      </Route>
    </Routes>
  );
}

export default App;
