import { Component } from "react";
import Counter from "../components/CounerLayout";

class CounterLayout extends Component {

  constructor(props) {
    super(props);
        this.countValue = 0;
        this.odd = 'even';
    }

    up = () => {
      this.setState({countValue: this.countValue += 1});
      this.even();
    }
    down = () => {
      if(this.countValue !== 0) {
        this.setState({countValue: this.countValue -= 1});
      }
      this.even();
    }
    reset = () => {
      this.setState({countValue: this.countValue = 0});
      this.even();
    }
    even = () => {
      if(this.countValue % 2 === 0) {
        this.setState({odd: this.odd = 'even'})
      } else {
        this.setState({odd: this.odd = 'odd'})
      }
    }

  render() {
  return (
  <Counter countValue = {this.countValue} odd = {this.odd} up = {this.up} down = {this.down} reset = {this.reset} even = {this.even}/>
  );
}
}

export default CounterLayout;
