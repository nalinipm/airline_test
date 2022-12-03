// import React, { useState, Component, StrictMode } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Dropdown from 'react-dropdown';
// import "./Login.css";
// import 'react-dropdown/style.css';


// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("select role");


//   function validateForm() {
//     //console.log("validateForm");
//     return email.length > 0 && password.length > 0 && role!= 'select role';
//   }

//   const options = [{ value:'select role', id: 0, label: 'select role' },{ value:'passenger', id: 1, label: 'Passenger' }, { value: 'Airline employee', id: 2, label: 'Airline employee' }, { value: 'Airport employee ', id: 3, label: 'Airport employee' }, { value: 'Admin ', id: 3, label: 'Admin' }];
  
  
//   function handleResult(result){
//     if(JSON.parse(result).success == 'true') {
//       console.log(result);
//       window.location.href ='/search';
//     };
    
//   }

//   function handleSignup(){
//     console.log("Signup page calling");
//     window.location.href='/signup';
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log("HandleSubmit 234231111");
//     console.log(role);
    
//     var myHeaders = new Headers();
//     //myHeaders.append("Access-Control-Allow-Origin", "*");
//     myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
//     var urlencoded = new URLSearchParams();
//     urlencoded.append("user_name", email);
//     urlencoded.append("password", password);
//     urlencoded.append("user_type", role.value);
    
//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: urlencoded,
//       redirect: 'follow'
//     };
    
//     fetch("http://127.0.0.1:8000/login", requestOptions)
//       .then(response => response.text())
//       .then(result => handleResult(result))
//       .catch(error => console.log('error', error));
      
    

//   }

//   return (

//     <div className="Login" >
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <h1 className="header1">Airport Management System</h1>
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="text"
//             value={email}
//             placeholder="Your Email"
//             onChange={(e) => setEmail(e.target.value)}
//             className="Control"
//           />


//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//             className="Control"
//           />
//         </Form.Group>
//         <label>Select Role</label>
        
//         <Dropdown options={options} onChange={setRole} value={role} matcher={(item, val) => {return item.id === val;}}/>
//         <Button block size="lg" type="submit" className="button" disabled={!validateForm()} >
//           Login
//         </Button>
//         <Button block size="lg" type="button" className="button"  onClick = {handleSignup} >
//           SignUp
//         </Button>
//       </Form>
//     </div>
//   );
// };

import React, {useState} from 'react';
import axios from 'axios';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    axios.post("http://localhost:8000/login", {
      username,
      password
    }, {withCredentials: true}).then(res => {
      console.log(res);
      if (res.data === 'success') {
        window.location.href = '/';
      }
    })
  };

  return (<div className="bodyWrap">
    <div className="contentLoginWrap">
      <div className="loginSide">
        <div className="loginWrap">
          <h1>Log in</h1>
          <div className="input-group">
            <input type="text" className="input" onChange={e => setUsername(e.target.value)} required="required"/>
            <label className={`${username.length > 0 ? "focusLabel" : ""}`}>Login</label>
          </div>
          <div className="input-group">
            <input type="text" className="input password" onChange={e => setPassword(e.target.value)} required="required"/>
            <label className={`${password.length > 0 ? "focusLabel" : ""}`}>Password</label>
          </div>
          <button onClick={login}>Login</button>
        </div>
      </div>
      <div className="infoSide">
        <div className="loginWrap">
          <h2>Hello again!</h2>
          <p>Log in to your account to get access to app.</p>
        </div>
      </div>
    </div>
  </div>)
}

