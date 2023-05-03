import {Component} from 'react'

import './index.css'

class FruitsContainer extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onIncrementMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="fruits-bg-container">
        <div className="fruits-card">
          <h1 className="fruits-count">
            Bob ate <span className="mango-count">{mangoCount}</span> mangoes
            <span className="banana-count"> {bananaCount}</span> bananas
          </h1>
          <div className="items-card-container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <div>
                <button
                  type="submit"
                  className="button"
                  onClick={this.onIncrementMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <div>
                <button
                  type="submit"
                  className="button"
                  onClick={this.onIncrementBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsContainer
