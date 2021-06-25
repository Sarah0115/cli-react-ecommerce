import logo from '../../logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Main.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Hero from '../Hero/Hero';


function Main() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar /> 
        
          
            <Switch>
              <Route exact path="/">
                  <Hero/>
              </Route>
              <Route exact path="/ItemListContainer">
                
                <ItemListContainer/> 
               
              </Route>

            </Switch>
          
          
          </BrowserRouter>
          
          
          
       
        
            
    </div>
  );
}

export default Main;
