import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookingForm from './components/Dashboard/BookingForm/BookingForm';
import OrderList from './components/Dashboard/OrderList/List';
import Review from './components/Dashboard/Review/Review';
import AddService from './components/Dashboard/AddService/AddService';
import NoFound from './components/NoFound/NoFound';

 export const UserContext = createContext();

function App() {

  const [loginUser, setLoginUser] = useState({})

  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/dashboard'>
            <BookingForm></BookingForm>
          </PrivateRoute>
          <Route path='/form'>
            <BookingForm></BookingForm>
          </Route>
          <Route path='/list'>
            <OrderList></OrderList>
          </Route>
          <Route path='/add'>
            <AddService></AddService>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NoFound></NoFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
