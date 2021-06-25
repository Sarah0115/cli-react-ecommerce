import React from 'react';
import ComponentCounter from '../ItemCount/ItemCount';
import './Item.scss';

/*const ProductsList = [
  {
    nombre:'La chica de nieve',
    stock: 5,
    valor: 12,
    img: 'https://oferplan.abc.es/blog/blog/wp-content/uploads/sites/10/2020/04/la-chica-de-nieve.jpg',
    autor: 'Javier Castillo', 
    genero: 'thriller'
  },
  {
    nombre:'Un cuento perfecto',
    stock: 3,
    valor: 11,
    img: 'https://oferplan.abc.es/blog/blog/wp-content/uploads/sites/10/2020/04/un-cuento-perfecto.jpg',
    autor: 'Elísabet Benavent', 
    genero: 'Crecimiento personal'
  },
  {
    nombre:'La madre de Frankenstein',
    stock: 1,
    valor: 15,
    img: 'https://oferplan.abc.es/blog/blog/wp-content/uploads/sites/10/2020/04/la-madre-de-frankenstein.jpg',
    autor: 'Almudena Grandes', 
    genero: 'Crimen'
  } 
];*/


const Item = ({listado}) => {
  var esto = listado;
  console.log(listado);
  console.log('llegue a item'); 
  console.log(esto);
  return (
    <div className="containerItem">
      
      {esto.map((element, i) =>{
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