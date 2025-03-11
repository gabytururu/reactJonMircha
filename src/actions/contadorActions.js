// OJO al igual que CONTADOR REDUCER, Contador Actions tampoco ES UN COMPONENTE porque es una funcion pura... y por eso se nombra con camel case tpypica donde la primera letra es MINUSCULA
// aca, a dif de los reducers esta OK dejarle el nombre generico de TYPES a esta definicion de actions.types porque en realidad NO SE ESPERA que aca se vayan a jalar ningunas otras actions.types de otros reducers, mas bien de existir se llevarian a su propio archivo tipo generadorQuejasAcciones.js, registroAcctiones.js etc. y se almacenarian en el folder actions
export const TYPES = {
    INCREMENT: 'INCREMENT',
    INCREMENT_5: 'INCREMENT_5',
    DECREMENT: 'DECREMENT',
    DECREMENT_5: 'DECREMENT_5',
    RESET: 'RESET'
}