import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import AddBooks from './components/Admin/Admin';
import Header from './components/Header/Header';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Orders from './components/Orders/Orders';
import ManageBooks from './components/ManageBooks/ManageBooks'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className='App' >
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>email:{loggedInUser.email}</p>
     <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <AddBooks />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout/>
          </PrivateRoute>
          <PrivateRoute path='/order'>
            <Orders/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path='/managebooks'>
            <ManageBooks/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/*'>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
