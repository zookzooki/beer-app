import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import { List } from './components/List/List';
import ItemCard from './components/ItemCard/ItemCard';
import { FavouritesContextProvider } from './context/FavouritesContext';

function App() {
  return (
    <FavouritesContextProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route path="/:id">
              <ItemCard />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </FavouritesContextProvider>
  );
}

export default App;
