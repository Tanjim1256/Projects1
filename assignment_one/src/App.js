import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './userOutput/userOutput.js';
import UserInput from './userInput/userInput.js';

class App extends Component {
        state = {
          username:'Supermax'
        };
        userNameChangedHandler = (event)=>{
          this.setState(
              {username:event.target.value}
            )

        }
    render() {
        return (
            <div className="App">
      <div>Lorem ipsum, dolor sit amet consectetur,
       adipisicing elit. Porro rem rerum, corporis debitis, d
       electus quis molestiae, non hic maiores pariatur quam,
        fugit repellendus sed fugiat! Aliquid, maxime archit
        ecto qui soluta error quia, excepturi porro. Voluptas,
       ullam at ipsam non culpa voluptates repellendus maxime, 
       modi reprehenderit explicabo, tenetur similique ipsa ratione 
       obcaecati deserunt a quos, debitis? Dicta, dolore minima 
       deleniti?</div>
       <div> 
       <UserOutput userName={this.state.username}/>

      <UserInput click={this.userNameChangedHandler}/>       

        </div>
        </div>
        );
    }

}

export default App;