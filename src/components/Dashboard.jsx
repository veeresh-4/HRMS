import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="Dashboard-maincontainer">
      <div className="box1">
        <h2 onClick={() => navigate("/add-employee")}>Total Employee</h2>
      </div>
      <div className="box2">
        <h2>Active Employee</h2>
      </div>
      <div className="box3">
        <h2>On Leave</h2>
      </div>
      <div className="box4">
        <h2>New Joiners This Month</h2>
      </div>
    </div>
  );
};
