import React from 'react';
import ComponentCounter from '../ItemCount/ItemCount';
//import ComponentCounter from '../ItemCount/ItemCount';
import Item from '../Item/Item';




const ItemList = ({listado}) =>{
 	
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