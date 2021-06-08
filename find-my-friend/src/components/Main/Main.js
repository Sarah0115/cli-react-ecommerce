import logo from '../../logo.svg';
import NavBar from '../NavBar/NavBar';
import './Main.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function Main() {
  return (
    <div className="App">
        <NavBar /> 
        <ItemListContainer/>     
    </div>
  );
}

export default Main;
