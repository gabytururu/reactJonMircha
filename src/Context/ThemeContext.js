import{createContext} from 'react'
import {useState} from 'react'

// creando la variable que inicializará el contexto
const ThemeContext = createContext()
const initialTheme = 'light'

//creando al proveedor/provider - este theme provider sera el contenedor que envuelva a todos los componentes que necesitan el Theme
const ThemeProvider = ({children}) => {
    
    const [theme,setTheme] = useState(initialTheme)
    const handleTheme =(e)=>{
        console.log(e.target.value)
        if(e.target.value === 'light'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }

    const data = {theme, handleTheme}
    return ( 
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
     );
}
 
export {ThemeProvider} ;
export default ThemeContext


// create context internamente tiene dos objetos: un wrapper (provider o proveedor) quien va a proveer todos los valores globales y un consumer quien nos permite consumir los valores del proveedor
// en la variable data establezco todos los valores que quiero exportar via el contexto global
// le paso estos valores al contexto estableciendolos como su value property
// y establezco también que serán provistos/transferidos a todos los componentes "children" que reciba/envuelva el contextProvider