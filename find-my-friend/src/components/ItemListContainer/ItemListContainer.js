import React, {useState} from 'react';
import './ItemListContainer.scss';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList.js'

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
  } 
];

const task = new Promise ((resolve, reject) => {
	console.log('esperando 8 seg')
			setTimeout(() =>{
			resolve (ProductsList);
	},4000)
	});


const ItemListContainer = (e, props) => {
   
  const maxItems = 5; 
  const [contador, setContador] = useState(0); 
  let onAdd = () =>{
    if(contador == maxItems){
      alert ('alcanzaste el maximo en stock')
    }if(contador <= maxItems){
      setContador(contador+1); 
    }
  };
  let newProducts= [];
  task.then(data => {
  console.log('llegue');
    newProducts = ProductsList.props;    
    console.log(`estp es ${newProducts}`);
    console.log(newProducts);
        }
    ,error => {
        console.log('Estoy pasando por aquí por que a promesa fue rechazada');
    }
);
  console.log('nuevosPr');
  console.log(newProducts);
  return (   
    <div className="container">
      <h4 className="contTitle">Encuentra esta temporada los mejores titulos</h4>

      <ItemList listado = {newProducts}>
        {console.log(newProducts)}
      </ItemList>
    </div>

      
  )
}
export default ItemListContainer;

