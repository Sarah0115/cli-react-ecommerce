import React, { useEffect, useState } from 'react';
import ComponentCounter from '../ItemCount/ItemCount';
import './Item.scss';


const Item = ({listado}) => {

  const [Productos, setProductos] = useState([]);  

 const task = new Promise ((resolve, reject) => {
    console.log('esperando 3 seg')
        setTimeout(() =>{        
        resolve (listado);
    },3000);
      console.log('espera seg')
    });


  useEffect(() =>{
    task.then((data)=>{
      setProductos(data);
    },
      error =>{
        console.log('error');
      })

  })
 
  return (
   

    <div className="containerItem">
    
    {Productos.map((element, i) =>{
      return( 
        
        <div className="producto" key={i}>
          
          <h4>{element.nombre}</h4>
          
          <img src={element.img} alt="portada"/>
          <p className="autor">Autor: <span>{element.autor}</span></p>
          <p className="stock">Stock : {element.stock}</p>
          <p className="valor">Valor : {element.valor}</p>
          <ComponentCounter stock={element.stock}/> 
        </div>
        );
      })
    }
    </div>
  )

  
}

export default Item;