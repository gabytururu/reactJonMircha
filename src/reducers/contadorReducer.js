// OJO este NO ES UN COMPONENTE porque es una funcion pura... y por eso se nombra con camel case tpypica donde la primera letra es MINUSCULA
// se le cambia el nombre a la funcion cuando es parte de un archivo reducer porque se asume que vas a tener varios reducers, entonces pues no puedes llamarlos a todos function reducer, sino que le das un nombre contextual, en este caso es el contadorReducer
// luego exportamos el reducer, pero ojo NO LA EXPORTO POR DEFECTO (EXPOR DEFAULT) pq entonces corro el riesgo de q por error alguien le cambie el nombre al importarla.. la diferencia entre exportar la funcion en linea directa o exportarla por defecto es que cuando hago export default puedo importar cambiando el nombre y cuando la hago como exportacion de la funcion directa A FUERZA tengo q respetar el nombre original
//ademas de la funcion REDUCTORA aca es siempre esencial tambien tener el VALOR/ESTADO INICIAL (initial state) y la funcion init en caso de haberla usado -- estas al igual que el reducer, se recomienda que ahora su nombre tenga el contexto por ej en este caso, contadorinitialState, contadorInit, etc y deben tambien EXPORTARSE de forma directa
// finalmente, como en la funcion reductora ocupa el objeto de las TYPES, entonces ESAS TYPES (O ese objeto de TYPES o de ACCIONES se lleva al archivo CONTADORACTIONS, Y DESDE ALLA SE IMPORTA Y LPOSTERIORMENTE LO IMPORTO ACA PARA PODER TENER ACCESO A EL) 

import {TYPES} from '../actions/contadorActions'
export const contadorInitialState= {contador:0}
export const contadorInit =(initialState)=>{
    return {
        contador: initialState.contador + 100
        //como uso esto por ej para agregar un signo de pesos a todos?
    }
}

export function contadorReducer(state,action){
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
            return contadorInitialState
        default: 
            return state
            
    }  
}

