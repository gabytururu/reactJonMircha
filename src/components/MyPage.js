import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useState} from 'react'

const initialTheme = 'light'
const initialLang = 'es'
const initialAuth = null

const translations = {
    es: {
        headerTitle: "Mi App SIN Context API",
        headerSubtitle: "Mi Cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesion",
        buttonLogout: "Cerrar Sesión",
        mainWelcome: "Bienvenida Invitada eh",
        mainHello: "Hola Usuaria",
        footerTitle: "Mi Pie de Página",
    },
    en: {
        headerTitle: "My App WITHOUT Context API",
        headerSubtitle: "Mi Header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Log-out",
        mainWelcome: "Welcome Guest!",
        mainHello: "Hello User",
        footerTitle: "My Footer", 
    }
}

const MyPage = () => {
    
    const [theme,setTheme] = useState(initialTheme)
    const handleTheme =(e)=>{
        console.log(e.target.value)
        if(e.target.value === 'light'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }

    const [language, setLanguage] = useState(initialLang)
    const handleLanguage =(e)=>{
        console.log(e.target.value)
        if(e.target.value === 'es'){
            setLanguage(translations.es)
        }else{
            setLanguage(translations.en)
        }
    }

    const [auth, setAuth] = useState(initialAuth)
    const handleAuth = () =>{
        if (auth) {
            setAuth(null)
        }else{
            setAuth(true)
        }
    }

    return ( 
        <div className="my-page">
            <Header 
                theme={theme} 
                handleTheme={handleTheme}
                language={language}
                handleLanguage={handleLanguage} 
                auth={auth}
                handleAuth={handleAuth}              
            />
            <Main 
                theme={theme}
                language={language}  
                auth={auth}      
            />
            <Footer 
                theme={theme}
                language={language}                
            />           
        </div>
     );
}
 
export default MyPage;
