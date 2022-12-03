import React, { useContext } from 'react';
import './Header.css';
import axios from "axios";
import { Navbar,Nav } from 'react-bootstrap';
import HeaderData from './HeaderData';
import { AuthLoginInfo } from '../AuthComponents/AuthLogin';

const logout = () => {
  axios
    .get("http://localhost:8000/logout", {
      withCredentials: true,
    })
    .then((res) => {
      if (res.data === "success") {
        window.location.href = "/login";
      }
    });
  // console.log("logout clicked")
};

const Navbar1 = ({ctx}) => {
  console.log(ctx);
  return(
    <Navbar className="navbar1">
        {ctx && (
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link className="username"><div className="username-2">Logged as : {ctx.username}</div></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link onClick={() => {logout();}}>Log Out</Nav.Link></Nav.Item>
          </Nav>
        )}
    </Navbar>
  )
}

const Navbar2 = ({ctx}) => {
  return(
    <Navbar className="navbar2" expand="lg">
      <Nav className="ml-auto">
        {HeaderData.map((val,key)=>{
          if (val?.role !== undefined && !val?.role.includes(ctx?.role)) {
            return null;
          }
          return (
            <Nav.Item><Nav.Link href={val.link} key={key}>{val.title}</Nav.Link></Nav.Item>
          );
        })}
      </Nav>
    </Navbar>
  );
}

const Header = () =>{
  const ctx= useContext(AuthLoginInfo);
  return(
    <div className="header">
      <Navbar1 ctx={ctx} />
      <Navbar2 ctx={ctx} />
    </div>
  );
};


// const Header = () => {
//   const ctx = useContext(AuthLoginInfo);
//   return (
//     <div className="header">
//       <Navbar className="navbar1">
//         {ctx && (
//           <Nav className="ml-auto">
//             <Nav.Item><Nav.Link className="username">Logged as: {ctx.username}</Nav.Link></Nav.Item>
//             <Nav.Item><Nav.Link onClick={() => {logout();}}>Log Out</Nav.Link></Nav.Item>
//           </Nav>
//         )}
//       </Navbar>
//       <Navbar className="navbar2" expand="lg">
//         <Nav className="ml-auto">
//           {HeaderData.map((val,key)=>{
//             if (val?.role !== undefined && val?.role !== ctx?.role) {
//               return null;
//             }
//             // else{}
//             return (
//               <Nav.Item><Nav.Link href={val.link} key={key}>{val.title}</Nav.Link></Nav.Item>
//             );
//           })}
//         </Nav>
//       </Navbar>
//     </div>
//   )
// }

export default Header