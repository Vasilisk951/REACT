import React from 'react';

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
        <a href="/counter">counter</a>
        </div>
    </div>
  )
};


export default HomePageLayout;
