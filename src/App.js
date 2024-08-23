
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GuestLayout from './layouts/GuestLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<GuestLayout/>}>
      </Route>
    </Routes>
  );
}

export default App;
