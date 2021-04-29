import { Component } from "react";
import HomePageLayout from "../components/HomePageLayout";

class HomePageContainer extends Component {
  render() {
    const userList = [
      {
        name: 'Oleg',
        age: 25,
      },
      {
        name: 'Kate',
        age: 18,
      }
    ]
    return <HomePageLayout userList={userList}/>;
  }
}

export default HomePageContainer;