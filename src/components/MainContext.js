import AuthContext from '../Context/AuthContext'
import LanguageContext from '../Context/LanguageContext'
import ThemeContext from '../Context/ThemeContext'
import {useContext} from 'react'

const MainContext = () => {
    const {theme} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)
    const {auth} = useContext(AuthContext)
    return (       
        <main className={theme}>
            <p>{ auth ? 
            language.mainWelcome
            :
            language.mainHello
            }</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque mollitia ea neque fugiat magnam inventore cum reiciendis delectus numquam. Vero unde perspiciatis earum sunt reiciendis aliquam id quos debitis quas?</p>
        </main>
     );
}
 
export default MainContext;