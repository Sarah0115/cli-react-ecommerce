import React, {useState} from 'react';

const ComponentCounter = ({stock, initial, onAdd, remove}) => {
    const [contador, setContador] = useState(0); 
    const maxItems = stock; 
    return (
        <div>
            <button onClick={() => {
                if(contador <= maxItems){
                    setContador(contador+1); 
                }if(contador == maxItems){
                    alert ('alcanzaste el maximo en stock')
                }
                }
            
            
            }>+</button>
            <input value ={contador}/>
            <button onClick={() => {
               
                    if(contador>0){
                        setContador(contador-1);  
                    }
                  
                    

                }
            }>-</button>
        </div>
            
    )
}
export default ComponentCounter;