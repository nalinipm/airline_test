import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Button, Modal, Form, OverlayTrigger, Tooltip, Col, Row, ModalHeader, Container,Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./GateControl.css";

const GateConrol = () => {

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:8000/api/getGatesInfo`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [showInfoSuccess,setShowInfoSuccess] = useState(false);
  
  const handleCloseInfoSuccess = () => {
    setShowInfoSuccess(false)
  }

  const handleShowInfoSuccess = () => {
    setShowInfoSuccess(true)
  }

  const [showInfoFailure,setShowInfoFailure] = useState(false);
  
  const handleCloseInfoFailure = () => {
    setShowInfoFailure(false)
  }

  const handleShowInfoFailure = () => {
    setShowInfoFailure(true)
  }

  const [showArchive, setShowArchive] = useState(false);
  const [tno, setTno] = useState(null);
  const [gno, setGno] = useState(null);
  const handleCloseArchive = () => {
    setShowArchive(false)
    setTno(null);
    setGno(null);
  };
  function handleShowArchive(tno,gno,condVal){
    setTno(tno);
    setGno(gno);
    setCondVal(condVal);
    setShowArchive(true);
  }

  const handleSubmit = (tno,gno,condVal) => {
    const params = {'tno':tno,'gno':gno,'condVal':condVal};
    axios.post('http://localhost:8000/api/enableGate', params)
        .then(response => {
          if(response.data==="Success"){
            handleShowInfoSuccess();
            fetchData();
            handleCloseArchive();
            handleSearchClear();
          }
          else{
            handleShowInfoFailure();
            handleCloseArchive();
          }
        });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [condVal,setCondVal] = useState("null");

  const [searchForGate,setSearchForGate]=useState('');
  const [searchForTerminal,setSearchForTerminal]=useState('');

  function editSearchForGate(e){
    setSearchForGate(e.target.value)
  }

  function editSearchForTerminal(e){
    setSearchForTerminal(e.target.value)
  }

  function dynamicSearch(){
    return (data.filter(n=>(
      n.gatenumber.toLowerCase().includes(searchForGate.toLowerCase()) && 
      n.terminalnumber.toLowerCase().includes(searchForTerminal.toLowerCase())
      )
    ))
  }

  const handleSearchClear = () => {
    setSearchForTerminal('');
    setSearchForGate('');
  }

  return (
    <div className='main-box'>
      <Row>
        <Col md={3}></Col>
        <Col className="over-box" md={6}>
          <div  className="table-box" >
          <Row>
            <Col md={3} className="cells"><strong>Terminal</strong></Col>
            <Col md={3} className="cells"><strong>Gate</strong></Col>
            <Col md={3} className="cells"><strong>Status</strong></Col>
            <Col md={3} className="cells"><strong>Change State</strong></Col>
          </Row>
          <Row>
            <Col md={3} className="cells">
              <input type= 'text'
              className='search-box'
              value = {searchForTerminal}
              onChange = {editSearchForTerminal}
              placeholder = 'Search Terminal'
              />
            </Col>
            <Col md={3} className="cells">
              <input type= 'text'
              className='search-box'
              value = {searchForGate}
              onChange = {editSearchForGate}
              placeholder = 'Search Gate'
              />
            </Col>
            <Col md={3} className="cells"></Col>
            <Col md={3} className="cells">
              <button className="the-button clear-btn" onClick={handleSearchClear}>Clear Filter</button>
            </Col>
          </Row>
          {dynamicSearch().map((item, index) => (
            <Row key={index}>
              <Col md={3} className="cells">{item.terminalnumber}</Col>
              <Col md={3} className="cells">{item.gatenumber}</Col>
              <Col md={3} className="cells">{(item.active===0)?"Inactive":"Active"}</Col>
              {
                item.active===0?<Col md={3} className="cells"><button className="the-button enable-btn" onClick={()=>handleShowArchive(item.terminalnumber,item.gatenumber,"Enable")}>Enable</button></Col>:<Col md={3} className="cells"><button className="the-button disable-btn" onClick={()=>handleShowArchive(item.terminalnumber,item.gatenumber,"Disable")}>Disable</button></Col>
              }
            </Row>
          ))}
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Modal show={showArchive} onHide={handleCloseArchive}>
        <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to <strong>{condVal}</strong> <strong>{gno}</strong> ?</Modal.Title>
        </Modal.Header>
        {
          (condVal==="Disable")?
          <Modal.Body>
            <p>
              Disabling this gate will automatically route any existing Flights Arrivals or Departures to alternate gates 
            </p>
          </Modal.Body>:
          null
        }
        <Modal.Footer>
            <Button variant="secondary" className="rounded-btn" onClick={handleCloseArchive}>
                Close
            </Button>
            <Button variant="success" className="rounded-btn" onClick={()=> handleSubmit(tno,gno,condVal)}>
                Confirm
            </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showInfoSuccess} onHide={handleCloseInfoSuccess}>
        <Modal.Header closeButton>
          Update Successful
        </Modal.Header>
      </Modal>
      <Modal show={showInfoFailure} onHide={handleCloseInfoFailure}>
        <Modal.Header closeButton>
          Update Failed
        </Modal.Header>
      </Modal>
    </div>
  )
}

export default GateConrol