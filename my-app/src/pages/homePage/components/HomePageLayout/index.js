import React from 'react';
import {Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"

const HomePageLayout = ({userList}) => {
  return (
    <div className="userCard">
      {userList.map((user, index) => {
        return (
          <div key={index}>
            name: {user.name} age: {user.age}
          </div>
        )
      })}
      <div>
      <Link className='btn btn-link' to="/counter">Counter</Link>
      <Link className='btn btn-link' to="/counters">Counters Manager</Link>
      <Link className='btn btn-link' to="/todolist">TODO LIST</Link>

        </div>
    </div>
  )
};


export default HomePageLayout;
