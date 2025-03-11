import {createContext} from 'react'
import {useState} from 'react'

const LanguageContext = createContext()
const initialLang = 'es'
const translations = {
    es: {
        headerTitle: "Mi App CON Context API",
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
        headerTitle: "My App WITH Context API",
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

const LanguageProvider = ({children}) =>{
    const[language, setLanguage] = useState(initialLang)
    const handleLanguage = (e) =>{
        console.log(e.target.value)
        if(e.target.value === 'es') {
            setLanguage(translations.es)
        } else{
            setLanguage(translations.en)
        }
    }

    const data = {language, handleLanguage}

    return(
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}

export {LanguageProvider};
export default LanguageContext