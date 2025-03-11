import {useState, useReducer} from 'react'

const initialState= {contador:0}

const init =(initialState)=>{
    return {
        contador: initialState.contador + 100
        //como uso esto por ej para agregar un signo de pesos a todos?
    }
}

const TYPES = {
    INCREMENT: 'INCREMENT',
    INCREMENT_5: 'INCREMENT_5',
    DECREMENT: 'DECREMENT',
    DECREMENT_5: 'DECREMENT_5',
    RESET: 'RESET'

}

//la funcion reductora va a recibir simepre dos parametros :
//1. el estado anterior y
//2. la accion, la cual siempre es un OBJETO que tiene un TYPE (SIEMPRE) o tipo de accion a jecutar y en ocasiones un PAYLOAD  que es el Valor que le estamos mandando para que modifique el estado.
//esta funcion SIEMPRE retorna el estado
function reducer(state,action){
    switch (action.type) {
        case 'INCREMENT':
            return {contador: state.contador + 1}
        case TYPES.INCREMENT_5:
            return {contador: state.contador + action.payload}
        case 'DECREMENT':
            return {contador: state.contador - 1}
        case TYPES.DECREMENT_5:
            return {contador: state.contador - action.payload}
        case TYPES.RESET:
            return initialState
        default: 
            return state
            
    }  
}

const ContadorReducer = () => {

    //const [count, setCount] = useState(0)

    // El use reducer desestructura dos elementos:
    //1. la variable del estado (que en use reducer se sugiere q sea un objeto)y
    //2. el dispatch es la accion que quieres realizar (ej. setCount)

    // Adicional a esto El hook useReducer recibe 3 parametros:
    //1. la funcion reductora (q se define fuera del componente)
    //2. el initial state que en useReducer se sugiere que sea un OBJETO. En este caso estamos inicializando este estado con un objeto con la propiedad "contador" con objeto vacio
    //3. el parametro init es una funcion que nos permite hacerle una transformación al estado inicial para que cargue ya con esa modificacion o transformacion, esta variable es opcional. por ahora se quitara´
    // const [state, dispatch] = useReducer(reducer,initialState,init)
    
    const [state, dispatch] = useReducer(reducer,initialState,init)
    const handleSumar = () => dispatch({type:'INCREMENT'})
    const handleSumar5 = () => dispatch({type:TYPES.INCREMENT_5, payload:5})
    const handleRestar = () => dispatch({type: 'DECREMENT'})
    const handleRestar5 = () => dispatch({type: TYPES.DECREMENT_5, payload:5})
    const handleReset = () => dispatch({type: TYPES.RESET})
    return ( 
        <div style={{textAlign:'center'}}>
            <h2>Contador con useReducer</h2>
            <nav>        
                <button onClick={handleRestar5}>-5</button>         
                <button onClick={handleRestar}>-</button> 
                <button onClick={handleReset}>0</button>
                <button onClick={handleSumar}>+</button>
                <button onClick={handleSumar5}>+5</button>
            </nav>
            <h3>{state.contador}</h3>
        </div>
     );
}
 
export default ContadorReducer
