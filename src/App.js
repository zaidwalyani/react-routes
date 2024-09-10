import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { Route, Routes, Navigate  } from 'react-router-dom';
import About from './component/About';
import Login from './component/Login';
import Signup from './component/Signup';
import { useEffect, useState } from 'react';
import Users from './component/Users';
function App() {

  const [isLogin , setIsLogin] = useState(null);
  useEffect(() => {
    let user = localStorage.getItem("user");
    if(user){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
    // console.log(user)
  } , [])
  return (
    <div className="App">
      <h1>Pages</h1>
      {(isLogin == true) ?
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/profile/:id' element={<Users />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to={"/"} />} />
        </Routes>
        :
        (isLogin == false) ?
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Navigate to={"/login"} />} />
          {/* <Route path='' element={} /> */}
        </Routes>
        :
        <p>Loading....</p>
      }
      {/* <Home /> */}
      <h1>Pages</h1>
    </div>
  );
}

export default App;
