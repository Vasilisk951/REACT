import { Component } from "react";
import Counter from "../components/CounerLayout";

class CounterLayout extends Component {

  constructor(props) {
    super(props);
        this.state = {
          countValue: 0,
          parityType: 'even',
        } 
    }

    handleIncrement = () => {
      this.setState({countValue: this.state.countValue += 1});
      this.updateParityType();
    }
    handleDecrement = () => {
      if(this.state.countValue !== 0) {
        this.setState({countValue: this.state.countValue -= 1});
      }
      this.updateParityType();
    }
    handleReset = () => {
      this.setState({countValue: this.state.countValue = 0});
      this.updateParityType();
    }
    updateParityType = () => {
      if(this.state.countValue % 2 === 0) {
        this.setState({odd: this.state.parityType = 'even'})
      } else {
        this.setState({odd: this.state.parityType = 'odd'})
      }
    }

  render() {
  return (
  <Counter countValue = {this.state.countValue} parityType = {this.state.parityType} handleIncrement = {this.handleIncrement} handleDecrement = {this.handleDecrement} handleReset = {this.handleReset}/>
  );
}
}

export default CounterLayout;