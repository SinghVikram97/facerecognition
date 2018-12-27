import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js'
import './App.css';

const particleOptions={
  particles:{
    number:{
      value:300,
      density:{
        enable:true,
        value_area:10000
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      input:''
    }
  }

  onInputChange=(event)=>{
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <Particles
          className='particles'
          params={particleOptions}
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange}/>
        {/* 
        <FaceRecognition/>} */}
      </div>
    );
  }
}

export default App;
