import {useState} from 'react'
type AuthUser = {
    name: string,
    email: string
}

const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const handlerLogin = () => {
        setUser({
            name: 'mazen',
            email: 'mazen@gmail.com'
        })
    }
    const handlerLogout = () => {
        setUser(null)
    }
  return (
    <div className='user'>
        <button className="login" onClick={handlerLogin}>Login</button>
        <button className="logout" onClick={handlerLogout}>Logout</button>
        <div>
            <h2>my name is: {user?.name}</h2>
            <h2>my email is: {user?.email}</h2>
        </div>
    </div>
  )
}

export default User