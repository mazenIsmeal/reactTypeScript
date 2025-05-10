import {useState} from 'react'

const IsLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const login = () => {
        setIsLoggedIn(true)
    }
    const logout = () => {
        setIsLoggedIn(false)
    }
  return (
    <div>
        <button onClick={login}>LogIn</button>
        <button onClick={logout}>LogOut</button>
        <div>user is {isLoggedIn ? 'Login' : 'Logout'}</div>
    </div>
  )
}

export default IsLoggedIn