import React, { useEffect, useState } from "react";
import "./BloodAvailableTable.css";
import axios from "axios";
function BloodAvailableTable() {
  const [donorData, setDonorData] = useState(null);

  useEffect(() => {
    const getDonorData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/blood-bank/get-donor-details/"
        );
        setDonorData(response.data.donorlist);
      } catch (error) {
        console.log(error);
      }
    };

    getDonorData();
  }, []);

  return (
    <div className="blood-available-table-container">
      <table className="bloods-available-table">
        <tbody>
          <tr>
            <th></th>
            <th>Donor Name</th>
            <th>Blood Type</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Contact No.</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
          {donorData !== null &&
            Array.from(donorData).map((data, index) => (
              <tr className="bb-hover-row" key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.bloodGroup}</td>
                <td>{data.dateOfBirth}</td>
                <td>{data.age}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.operatingCity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default BloodAvailableTable;
