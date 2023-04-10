import React, { useState, useEffect } from "react";
import { firestore } from "../base";

const ManageAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await firestore.getUsers();
      setUsers(users);
    };
    getUsers();
  }, []);

  return (
    <div className="manageadmin">
      <h1>Manage Admin</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button
              onClick={async () => {
                await firestore.changeAdminStatus(
                  user.id,
                  user.admin_status ? 0 : 1
                );
                window.location.reload();
              }}
            >
              {user.admin_status ? "Admin" : "Not Admin"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageAdmin;
