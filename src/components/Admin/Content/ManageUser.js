import React, { useState } from 'react';
import ModalCreateUser from './ModalCreateUser';
import "./ManageUser.scss"

const ManagerUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">
        Manager user
      </div>
      <div className="users-content">
        <div>
          <button>Add new user</button>
        </div>
        <div>
          
        </div>
        <ModalCreateUser />
      </div>
    </div>
  );
}

export default ManagerUser;