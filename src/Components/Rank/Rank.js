import React, {
  Component
} from 'react'
class Rank extends Component {
  render() {
    return ( <
      div >
      <
      div className = 'white f2' > {
        `${this.props.name}, your current rank is...`
      } <
      /div> <
      div className = 'white f1' > {
        `#${this.props.entries}`
      } <
      /div> <
      /div>
    )
  }
}
export default Rank;