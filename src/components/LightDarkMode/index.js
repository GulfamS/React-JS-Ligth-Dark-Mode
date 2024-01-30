import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  buttonClick = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  modeClasses = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'dark-mode' : 'light-mode'
  }

  getButtonText = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const buttonText = this.getButtonText()
    const changeBackground = this.modeClasses()
    return (
      <div className="container">
        <div className={`light-dark-mode-card ${changeBackground}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <div className="btn-container">
            <button type="button" className="button" onClick={this.buttonClick}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
