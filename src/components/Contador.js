import {useState} from 'react'
const Contador = () => {

    const [count, setCount] = useState(0)
    const handleSumar = () => setCount(count+1)
    const handleRestar = () => setCount(count-1)
    return ( 
        <div style={{textAlign:'center'}}>
            <h2>Contador con useState</h2>
            <nav>                 
                <button onClick={handleRestar}>-</button> 
                <button onClick={handleSumar}>+</button>
            </nav>
            <h3>{count}</h3>
        </div>
     );
}
 
export default Contador
