import React, {useState} from 'react';


import ComponentCounter from '../ItemCount/ItemCount';

const ItemListContainer = (e) => {
   
    const maxItems = 5; 
    const [contador, setContador] = useState(0); 
    let onAdd = () =>{
        if(contador <= maxItems){
            setContador(contador+1); 
        }if(contador == maxItems){
            alert ('alcanzaste el maximo en stock')
        }
    }
    return (
        <div>
            <ComponentCounter stock={maxItems} />
            <h2>Aqui van los productos</h2>
        </div>
    )
}
export default ItemListContainer;