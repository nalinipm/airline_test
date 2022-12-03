import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useState,useContext } from "react";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import PrivateRoute from './components/AuthComponents/PrivateRoute';
import { AuthLoginInfo }  from './components/AuthComponents/AuthLogin';
import AdminRoute from './components/AuthComponents/AdminRoute';
import LoginRoute from './components/AuthComponents/LoginRoute';
import Login from './components/Login/Login';
// import Login_p from './components/Login-p/Login';
import Flights from './components/Flights/Flights';
import Profile from './components/Profile/Profile';
import AirlineEmpRoute from './components/AuthComponents/AirlineEmpRoute';
import AirportEmpRoute from './components/AuthComponents/AirportEmpRoute';
import GateControl from './components/GateControl/GateConrol';
import AssignBaggage from './components/AssignBaggage/AssignBaggage';
import FlightSchedules from './components/FlightSchedules/FlightSchedules';
import { Navigate } from "react-router-dom";
import Addschedule from './components/Addschedule/addschedule';
import Signup from './components/Signup/signup'
import SignupRoute from './components/AuthComponents/SignupRoute';

function App() {
  const ctx = useContext(AuthLoginInfo);
  console.log(ctx);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="Content">
          <Routes>
            <Route path="/login" element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            } />
             <Route path="/signup" element={
              <LoginRoute>
                <Signup />
              </LoginRoute>
            } />
            <Route path='/flights' element={
              // <PrivateRoute>
                <Flights />
              // </PrivateRoute>
            } />
            <Route path='/profile' element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } />
            <Route path='/assignbaggage' element={
              // <AirportEmpRoute>
                <AssignBaggage />
              // </AirportEmpRoute>
            } />
            <Route path='/gatecontrol' element={
              // <AirportEmpRoute>
                <GateControl />
              // </AirportEmpRoute>
            } />
            <Route path='/flightschedules' element={
              // <AirlineEmpRoute>
                <FlightSchedules />
              // </AirlineEmpRoute>
            } />
             <Route path='/addschedules' element={
              <AirlineEmpRoute>
                <Addschedule />
              </AirlineEmpRoute>
            } />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
