import React,{Component} from 'react'
import './FaceRecognition.css'
class FaceRecognition extends Component{
  render(){
    return(
      <div className="center ma">
        <div className='absolute mt2'>
          <img id='inputImage'alt='' src={this.props.imageUrl} width='500px' height='auto'/>
          <div className='bounding-box' style={{top:this.props.box.topRow,right:this.props.box.rightCol,left:this.props.box.leftCol,bottom:this.props.box.rightCol}}></div>
       </div>
      </div>
    )
  }
}
export default FaceRecognition;