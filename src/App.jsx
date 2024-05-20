import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Pages/Auth';
import User from './Pages/User';
import UserDetails from './Pages/UserDetails';
import PasswordReset from './Pages/PasswordReset';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Auth />}></Route>
        <Route path='/register' element={<Auth register/>}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/user-details' element={<UserDetails />}></Route>
        <Route path='/reset-password/:token' element={<PasswordReset />}></Route>
      </Routes>
    </div>
  );
}

export default App;
