import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import User from './user';

class App extends Component{

 state = {
    user: []
  };
  
  componentDudMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((arData) => {
      this.setState({ user: arData })
    })
    .catch(console.log)
  }
  
  render(){
    return(
      
      <User user={this.state.user} />
      
      );
    }
  }
    
export default App;