// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import PostOverveiw from './pages/PostOverveiw';
import Profile from './pages/Profile';
import Login from './pages/login';
import Signup from './pages/signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className='app-bg'>

      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/post' element={<PostOverveiw />}></Route>
          <Route exact path='/myprofile' element={<Profile />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
