import React from 'react'

const Login = () => {
    const handleLogin = () => {
        localStorage.setItem("user" , "asd");
    }
  return (
    // <div>Login</div>
    <form onSubmit={(e) => {e.preventDefault()}}>
        <button onClick={handleLogin}>Login</button>
    </form>
  )
}

export default Login