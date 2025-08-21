import React from "react";

const UserData = () => {
  return (
    <div className="container mt-5">
      <h2>User Data</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Pin Code</th>
            <th>DOB</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {/* Abhi blank hai, baad me DB se fetch karke fill karenge */}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
