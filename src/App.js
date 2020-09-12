import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
     <BrowserRouter>
        <div className='App'>
           <div className='app'>
              <Switch>
                 <Route path='/checkout'>
                    <h1> checkout</h1>
                 </Route>
                 <Route path='/login'>
                    <h1> login</h1>
                 </Route>
                 <Route path='/'>
                    <Header />
                    <h1> Home Page</h1>
                 </Route>
              </Switch>
           </div>
        </div>
     </BrowserRouter>
  );
}

export default App;
