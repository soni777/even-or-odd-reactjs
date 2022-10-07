import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  increment = () => {
    this.setState(prevState => {
      const randomNumber = Math.floor(Math.random() * 101)
      return {number: prevState.number + randomNumber}
    })
  }

  render() {
    const {number} = this.state
    const evenOrOdd = number % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card">
          <h1>Count {number}</h1>
          <p className="description">Count is {evenOrOdd}</p>
          <button className="button" type="button" onClick={this.increment}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
