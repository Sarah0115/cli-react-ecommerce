import React from 'react';
import './ItemListContainer.scss';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList.js'



const ItemListContainer = () => {
  const ProductsList = [
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
  },
  {
    nombre:'Midnight Sun',
    stock: 3,
    valor: 21,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41P0fRGbETL._SX329_BO1,204,203,200_.jpg',
    autor: 'Stephenie Meyer', 
    genero: 'Teen and Young Adult'
  } 
];
  

  return (   
    
      <Item listado = {ProductsList}></Item>
    )
    
};
export default ItemListContainer;

