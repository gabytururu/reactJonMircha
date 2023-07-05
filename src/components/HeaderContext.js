import {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import LanguageContext from '../Context/LanguageContext'
import AuthContext from '../Context/AuthContext'

const HeaderContext = () => {

    //consumiendo el contexto
    const {theme, handleTheme} = useContext(ThemeContext)
    const {language, handleLanguage} = useContext(LanguageContext)
    const {auth, handleAuth} = useContext(AuthContext)

    return ( 
            <header className={theme}>
                <h2>{language.headerTitle}</h2>
                <h3>{language.headerSubtitle}</h3>
                <select name="language" onChange={handleLanguage}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                <input type="radio" name="theme" id="light-context" onClick={handleTheme} value="light" />
                <label htmlFor="light-context">{language.headerLight}</label>
                <input type="radio" name="theme" id="dark-conext"  onClick={handleTheme} value="dark" />
                <label htmlFor="dark-context">{language.headerDark}</label>
                <button onClick={handleAuth}>
                    {auth ? 
                    language.buttonLogin
                  :
                    language.buttonLogout
                }</button>                
            </header>
     );
}
 
export default HeaderContext;