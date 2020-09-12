import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from "./firebase";
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
const [{user}, dispatch] = useStateValue();

useEffect(()=>{
const unsubscribe= auth.onAuthStateChanged((authUser)=>{
	if(authUser){
		dispatch({
			type: "SET_USER",
			payload: authUser
		})
	}else{
		dispatch({
			type: "SET_USER",
			payload: null
		});
	}
	});
	return ()=>{
		unsubscribe()
	}
}, [])

console.log("User: ", user)

  return (
     <BrowserRouter>        
           <div className='app'>
              <Switch>
                 <Route path='/checkout'>
                	<Header />
                    <Checkout />
                 </Route>
                 <Route path='/login'>
                    <Login />
                 </Route>
                 <Route path='/'>
					<Header />
                    <Home />
                 </Route>
              </Switch>
           </div>       
     </BrowserRouter>
  );
}

export default App;
