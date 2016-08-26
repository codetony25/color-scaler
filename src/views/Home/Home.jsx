import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Style } from 'jassy';

import HomeState from './Home-state.js';

@observer
class Home extends React.Component {

  static displayName = 'Home';

  constructor (props) {
    super(props);
  }

  renderColorName = () => {
    if (HomeState.nameColorValue) {
      return (
        <div className="home-color-input-container">
          <h4>Color</h4>
          <input
            type="text"
            value={HomeState.nameColorValue}
            placeholder="example: white"
            onChange={HomeState.onNameColorInputChange}
          />
        </div>
      );
    }
    else {
      return null;
    }
  };

  render () {
    return (
      <div>
        <Style rules={HomeState.styles} />
        <DevTools />
        <div className="home-title">
          <h1>Hello Color Scaler! (BETA)</h1>
          <p>
            {'This will get better soon. I promise.'}
          </p>
        </div>
        <div className="home-container">
          <div>
            <div className="home-color-input-container">
              <h4>Hex</h4>
              <input
                type="text"
                value={HomeState.hexColorValue}
                placeholder="example: #ffffff"
                onChange={HomeState.onHexColorInputChange}
              />
            </div>
            <div className="home-color-input-container">
              <h4>RGB(a)</h4>
              <input
                type="text"
                value={HomeState.rgbColorValue}
                placeholder=
                  "example: rgb(255, 255, 255) or rgba(255, 255, 255, 1)"
                onChange={HomeState.onRgbColorInputChange}
              />
            </div>
            <div className="home-color-input-container">
              <h4>HSL(a)</h4>
              <input
                type="text"
                value={HomeState.hslColorValue}
                placeholder=
                  "example: hsl(360, 100%, 100%) or hsla(360, 100%, 100%, 1)"
                onChange={HomeState.onHslColorInputChange}
              />
            </div>
            <div className="home-color-input-container">
              <h4>HSB</h4>
              <input
                type="text"
                value={HomeState.hsbColorValue}
                placeholder="example: hsb(0, 100%, 100%)"
                onChange={HomeState.onHsbColorInputChange}
              />
            </div>
            {this.renderColorName()}
          </div>
          <div>
            <div className="home-color-input-container">
              <h3>Type any color format you want to scale to:</h3>
              <input
                type="text"
                className="scale-color-input"
                value={HomeState.scaleColorValue}
                placeholder="Any Format"
                onChange={HomeState.onScaleColorInputChange}
              />
              <h2>Sass/Scss:</h2>
              <p>{HomeState.resultedScaledColorValue}</p>
              <h2>HSL(a)</h2>
              <p>{HomeState.resultHslScaleColorValue}</p>
              <h2>HSB</h2>
              <p>{HomeState.resultHsbScaleColorValue}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
