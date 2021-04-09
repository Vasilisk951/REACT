import React from 'react';
import {Link} from "react-router-dom";

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
      <Link to="/counter">Counter</Link>
        </div>
    </div>
  )
};


export default HomePageLayout;
