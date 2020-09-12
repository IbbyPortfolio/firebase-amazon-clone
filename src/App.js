import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';

function App() {
  return (
     <BrowserRouter>
        <div className='App'>
           <div className='app'>
                    <Header />
              <Switch>
                 <Route path='/checkout'>
                    <Checkout />
                 </Route>
                 <Route path='/login'>
                    <h1> login</h1>
                 </Route>
                 <Route path='/'>
                    <Home />
                 </Route>
              </Switch>
           </div>
        </div>
     </BrowserRouter>
  );
}

export default App;
