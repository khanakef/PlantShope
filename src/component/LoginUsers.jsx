import React, { useEffect, useState } from "react";

const LoginUsers = () => {
  const [users, setUsers] = useState([]);

  // ✅ Fetch data from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/login-users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("❌ Error fetching login users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Login Users</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Register ID</th>
            <th>Email</th>
            <th>Password</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.register_id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.status}</td>
                <td>{user.created_at}</td>
                <td>{user.updated_at}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No login users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LoginUsers;
