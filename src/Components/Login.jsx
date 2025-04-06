import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useLogin } from '../hooks/useLogin'

export default function Login() {

    // 3. Consumir el contexto
    const { setUser } = useContext(AuthContext)
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    
    
    const { login } = useLogin()
    
   

    const handleLogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const isSuccess = login(email, password);
        if(!isSuccess)   
        {
            setError("Credenciales incorrectas");
        }
        else
        {    
            setUser(email)        
        }
    }


    return (
        <>        
              <h2>Login</h2>                      
              <div>
                <input 
                type="email"
                placeholder='Correo'
                ref={emailRef}
                />
                <br/>
                <input
                type="password"
                placeholder='Contraseña'
                ref={passwordRef}
                />
                <br/>
                <button onClick={handleLogin}>Ingresar</button>
                { error && <p style={{ color: "red" }}>{error}</p> }
              </div>                     
        </>
    )
}