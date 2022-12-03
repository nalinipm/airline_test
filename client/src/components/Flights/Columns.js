export const Columns = [[
    {
      title: "Airline Name",
      dataIndex: "airlinename",
      key: "airlinename"
    },
    {
      title: "Flight Number",
      dataIndex: "flightnumber",
      key: "flightnumber"
    },
    {
      title: "Depart City",
      dataIndex: "departcity",
      key: "departcity"
    },
    {
      title: "Depart State Code",
      dataIndex: "departstatecode",
      key: "departstatecode",
    },
    {
      title: "Depart Time",
      // dataIndex: "departtime",
      key: "departtime",
      render: datetime => {
        var date_only=datetime.departtime.split("T")[0];
        var time_only=datetime.departtime.split("T")[1].split(".000")[0];
        return date_only+" "+time_only;
      }
    },
    {
      title: "Arrive Time",
      // dataIndex: "arrivetime",
      key: "arrivetime",
      render: datetime => {
        var date_only=datetime.arrivetime.split("T")[0];
        var time_only=datetime.arrivetime.split("T")[1].split(".000")[0];
        return date_only+" "+time_only;
      }
    },
    {
      title: "Terminal Number",
      dataIndex: "terminalnumber",
      key: "terminalnumber",
    },
    {
      title: "Gate Number",
      dataIndex: "gatenumber",
      key: "gatenumber"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    }
  ],
  [
    {
      title: "Airline Name",
      dataIndex: "airlinename",
      key: "airlinename"
    },
    {
      title: "Flight Number",
      dataIndex: "flightnumber",
      key: "flightnumber"
    },
    {
      title: "Depart City",
      dataIndex: "departcity",
      key: "departcity"
    },
    {
      title: "Depart State Code",
      dataIndex: "departstatecode",
      key: "departstatecode",
    },
    {
      title: "Depart Time",
      // dataIndex: "departtime",
      key: "departtime",
      render: datetime => {
        var date_only=datetime.departtime.split("T")[0];
        var time_only=datetime.departtime.split("T")[1].split(".000")[0];
        return date_only+" "+time_only;
      }
    },
    {
      title: "Arrive Time",
      // dataIndex: "arrivetime",
      key: "arrivetime",
      render: datetime => {
        var date_only=datetime.departtime.split("T")[0];
        var time_only=datetime.departtime.split("T")[1].split(".000")[0];
        return date_only+" "+time_only;
      }
    },
    {
      title: "Terminal Number",
      dataIndex: "terminalnumber",
      key: "terminalnumber",
    },
    {
      title: "Gate Number",
      dataIndex: "gatenumber",
      key: "gatenumber"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    }
  ]
];
  