import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		userInput:''
	}
	inputchangedHandler = (event)=>{
		this.setState({
			userInput:event.target.value;
		})
	}
render(){
	  return (
    <div className="App">
      <h1>This is a react App!!!</h1>
    </div>
    <input 
    value={this.state.userInput}
    onChange={this.inputchangedHandler}
     type="text"/>
     <p>{this.state.userInput}</p>
  );
}
}

export default App;
