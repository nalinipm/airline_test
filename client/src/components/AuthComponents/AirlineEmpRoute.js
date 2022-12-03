import React, { useContext, useEffect } from 'react';
import { AuthLoginInfo } from './AuthLogin';
import { Navigate } from 'react-router-dom';
import './Styles/loadingPage.css';

function AirlineEmpRoute({ children }) {
  const user = useContext(AuthLoginInfo);
  if(user === undefined) {
    return (
      <div className="loading-page-wrapper">
        <div className="loading-page">
          <div className="spinner"></div>
        </div>
      </div>
    )
  }
  console.log(children);
  return user.role.includes("airlineemp") ? children : <Navigate to='/flights' /> ;

}
export default AirlineEmpRoute