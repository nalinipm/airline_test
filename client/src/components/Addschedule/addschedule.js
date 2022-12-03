import React, { useState } from "react";
import './addschedule.css';
import Axios from 'axios'; 
//import '../../App.js'



function Addschedule  ()  {
    const [arlnname, setAirlineName]= useState("");
    const [arptcode, setAirportCode]= useState("");
    const [arrtime, setArrivaltime]= useState("");
    const [gate, setGate]= useState("");
    const [terminal, setTerminal]= useState("");
    const [fltnum, setFlightnumber]= useState("");
    const [source, setSource]= useState("");
    const [destination, setDestination]= useState("");
   

const addscheduleDetails = () =>{
    alert("in addscheduleDetails method")

    Axios.post("http://localhost:8000/addschedule", {
      airlineName: arlnname ,
      airportCode: arptcode, 
      arrivaltime: arrtime,
      gate_num: gate,
      terminal_id: terminal, 
      flight_number_fk: fltnum,
      source: source,
      destination: destination
    }).then((res)=>{
        console.log(res)
      alert("successfully added")
    });
}
    return (
        
        <div>
         <form >
          <table className="addschedule-table">
           <th> </th>
           <th></th>
           <tr>
            <td><label for="arlnname">Airline name:</label></td>
            <td> <input type="text" id="arlnname" name="arlnname"   value={arlnname} onChange={(e)=>{setAirlineName(e.target.value);}}/></td>
           </tr>
           <tr>
            <td> <label   for="arptcode">Airport code:</label></td>
            <td> <input type="text"   id="arptcode" name="arptcode" value={arptcode} onChange={(e)=>{setAirportCode(e.target.value);}}/></td>
           </tr>
           <tr>
            <td><label for="arrtime"  >Arrival time:</label></td>
            <td> <input type="datetime-local"    id="arrtime" name="arrtime" value={arrtime} onChange={(e)=>{setArrivaltime(e.target.value);}}/></td>
           </tr>
           <tr>
            <td><label for="gate"  >Gate:</label></td>
            <td><input type="text"    id="gate" name="gate" value={gate} onChange={(e)=>{setGate(e.target.value);}}/></td>
           </tr> 
           <tr>
            <td><label for="terminal"  >Terminal:</label></td>
            <td><input type="text"    id="terminal" name="terminal" value={terminal} onChange={(e)=>{setTerminal(e.target.value);}}/></td>
           </tr>   
           <tr>
            <td><label for="fltnum"  >Flight number:</label></td>
            <td><input type="text"    id="fltnum" name="fltnum" value={fltnum} onChange={(e)=>{setFlightnumber(e.target.value);}}/></td>
           </tr> 
           <tr>
            <td><label for="source"  >Source:</label></td>
            <td><input type="text"    id="source" name="source" value={source} onChange={(e)=>{setSource(e.target.value);}}/></td>
           </tr>  
           <tr>
            <td><label for="destination"  >Destination:</label></td>
            <td><input type="text"    id="destination" name="destination" value={destination}  onChange={(e)=>{setDestination(e.target.value);}}/></td>
           </tr>         
           <tr>
            <td></td>
            <td><button className="button" onClick={addscheduleDetails}>Add schedule</button></td>
           </tr>
          </table>
          
            
            
        </form>

        </div>
    )
  }

  export default Addschedule 
