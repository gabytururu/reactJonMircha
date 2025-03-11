import { createContext } from "react";
import { useState } from 'react';

const AuthContext = createContext()
const initAuth = null

const AuthProvider =({children}) =>{

    const [auth, setAuth] = useState(initAuth)
    const handleAuth = () =>{
        if(auth){
            setAuth(null)
        }else{
            setAuth(true)
        }
    }
    const data = {auth, handleAuth}

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider}
export default AuthContext