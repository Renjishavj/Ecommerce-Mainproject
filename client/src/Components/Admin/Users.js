import React, { useState, useEffect } from 'react';
import "./Admin.css"; 
import { RiDeleteBinFill } from "react-icons/ri";
import { TbLockCancel } from "react-icons/tb";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3300/route/allusers`);
      const data = await response.json();

      if (response.ok) {
        const filteredUsers = data.users.filter(user => user.email !== "admin123@gmail.com");
        setUsers(filteredUsers);
      } else {
        console.error('Error fetching users:', data.error);
      }
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  const handleDeleteUser = async (email) => {
    try {
      const response = await fetch(`http://localhost:3300/route/deleteuser/${email}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        console.log(`Deleted user ${email}`);
        fetchUsers();
      } else {
        console.error('Error deleting user:', data.error);
      }
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  const handleBlockUser = async (email, isBlocked) => {
    try {
      if (!isBlocked) {
        const response = await fetch(`http://localhost:3300/route/blockuser/${email}`, {
          method: 'PUT',
        });

        const data = await response.json();

        if (response.ok) {
          console.log(`Blocked user ${email}`);
          fetchUsers();
        } else {
          console.error('Error blocking user:', data.error);
        }
      }
    } catch (error) {
      console.error('Error blocking user:', error.message);
    }
  };

  return (
    <>
      <table className="users-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Mobile</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.email)}><RiDeleteBinFill  className='useradmin-icon'/> </button>
              </td>
              <td>
                {user.blocked ? (
                  <button className='blck-btn'>Blocked</button>
                ) : (
                  <button onClick={() => handleBlockUser(user.email, user.blocked)}>
                    <TbLockCancel  className='useradmin-icon' />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
