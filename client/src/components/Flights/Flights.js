import React, { useState } from "react";
import { Table, Input } from "antd";
import axios from "axios";
import { Columns } from "./Columns";
import {Button,Container} from "react-bootstrap";
import { FlightSearch } from "./FlightSearch";


const { Search } = Input;

const fetchArrive = async () => {
  const { data } = await axios.get(
    "http://localhost:8000/api/getArriveFlights"
  );
  return { data };
};

const fetchDepart = async () => {
  const { data } = await axios.get(
    "http://localhost:8000/api/getDepartFlights"
  );
  return { data };
};

const ArrivalData = () => {
  const [searchVal, setSearchVal] = useState(null);

  const { filteredData, loading } = FlightSearch({
    searchVal,
    retrieve: fetchArrive
  });

  return (
    <div>
      <Search
        onChange={e => setSearchVal(e.target.value)}
        placeholder="Search"
        enterButton
        // style={{ position: "sticky", top: "10", left: "0" }}
      />
      <Table
        rowKey="name"
        dataSource={filteredData}
        columns={ Columns[0] }
        loading={loading}
        pagination={false}
      />
    </div>
  );
}

const DepartData = () => {
  const [searchVal, setSearchVal] = useState(null);

  const { filteredData, loading } = FlightSearch({
    searchVal,
    retrieve: fetchDepart 
  });

  return (
    <div>
      <Search
        onChange={e => setSearchVal(e.target.value)}
        placeholder="Search"
        enterButton
        // style={{ position: "sticky", top: "10", left: "0" }}
      />
      <Table
        rowKey="name"
        dataSource={filteredData}
        columns={ Columns[1] }
        loading={loading}
        pagination={false}
      />
    </div>
  );
}

const Flights = () => {

  const [selected, setSelected] = useState(null)

  return (
    <div>
      <Button onClick={() => { setSelected('arrivals') }}>Arivals</Button>
      <Button onClick={() => { setSelected('departures') }}>Departures</Button>
      <div>
        {(selected==='arrivals')?<ArrivalData />:null}
        {(selected==='departures')?<DepartData />:null}
      </div>
    </div>
  );
}

export default Flights