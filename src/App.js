import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import Signin from './Components/Signin/Signin'
import './App.css';

const app=new Clarifai.App({
    apiKey:'27b63c77379147c4a08f2cfdacd86871'
});

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
      input:'',
      imageUrl:'',
      box:{},
      route:'signin'
    }
  }

  calculateFaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputImage');
    const width=Number(image.width);
    const height=Number(image.height);
    return{
      leftCol:clarifaiFace.left_col*width,
      topRow:clarifaiFace.top_row*height,
      rightCol:width-(clarifaiFace.right_col*width),
      bottomRow:height-(clarifaiFace.bottom_row*height)
    }    
  }

  displayFaceBox=(box)=>{
    this.setState({box:box});
  }

  onInputChange=(event)=>{
    this.setState({input:event.target.value})
  }

  onSubmit=()=>{
    console.log('click');
    this.setState({imageUrl:this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
       this.state.input)
       .then((response=>this.displayFaceBox(this.calculateFaceLocation(response))))
       .catch((err)=>console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles
          className='particles'
          params={particleOptions}
        />
        <Navigation/>
        <Signin/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
