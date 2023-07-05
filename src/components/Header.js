const Header = ({theme, handleTheme, language, handleLanguage, auth, handleAuth}) => {
    return ( 
            <header className={theme}>
                <h2>{language.headerTitle}</h2>
                <h3>{language.headerSubtitle}</h3>
                <select name="language" onChange={handleLanguage}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                <input type="radio" name="theme" id="light" onClick={handleTheme} value="light" />
                <label htmlFor="light">{language.headerLight}</label>
                <input type="radio" name="theme" id="dark"  onClick={handleTheme} value="dark" />
                <label htmlFor="dark">{language.headerDark}</label>
                <button onClick={handleAuth}>
                    {auth ?
                      language.buttonLogout 
                    : 
                      language.buttonLogin}
                    </button>                
            </header>
     );
}
 
export default Header;