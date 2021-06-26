import React, {useState} from 'react';
import ComponentCounter from '../ItemCount/ItemCount';
//import ComponentCounter from '../ItemCount/ItemCount';
import Item from '../Item/Item';




const ItemList = (listado) =>{
  console.log(listado.props)
  const maxItems = 5; 
  const [contador, setContador] = useState(0); 
  let onAdd = () =>{
    if(contador == maxItems){
      alert ('alcanzaste el maximo en stock')
    }if(contador <= maxItems){
      setContador(contador+1); 
    }
  };
 	
  <div>si</div>
  console.log(`no ${listado}`);
   return(
     <div>
       {console.log(listado[1])}
        <Item listado = {listado}></Item>

     </div>
)
    

}

export default ItemList;