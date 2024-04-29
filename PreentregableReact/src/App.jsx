
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from'./components/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/items" component={ItemListContainer} />
        <Route path="/items/:id" component={ItemDetailContainer} />
      </Switch>
    </Router>
  );
 /* return (
  <div>
    <NavBar></NavBar>
    <ItemListContainer></ItemListContainer>
  </div>
  )*/ 

}

export default App
