import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Style } from 'jassy';

import homeStyle from './Home-style.js';
import homeState from './Home-state.js';

@observer
class Home extends React.Component {
  static displayName = 'Home';

  constructor (props) {
    super(props);

    this.state = {
      styles: homeStyle()
    };

    console.log('styles', homeStyle());
  }

  renderGeneratedResult = () => {
    if (homeState.generatedColorScalePercentage) {
      return (
        <div className="home-color-result">
          <h3>RESULTS! For Lighten Percentage:</h3>
          <h1>
            {'$variable: '}
            <span>
              {homeState.generatedColorScalePercentage}
            </span>
          </h1>
        </div>
      );
    }
    else {
      return null;
    }
  };

  renderErrorMessage = () => {
    if (homeState.generateErrorMessage) {
      return (
        <div className="home-generate-error">
          <p>{homeState.generateErrorMessage}</p>
        </div>
      );
    }
  };

  render () {
    return (
      <div>
        <Style rules={this.state.styles} />
        <DevTools />
        <div className="home-container">
          <div className="home-title">
            <h1>Hello Color Scaler! (BETA)</h1>
            <p>
              {`This will get better soon. I promise.`}
            </p>
          </div>
          <div className="home-choose-color">
            <button onClick={() => homeState.selectColor('#ffffff')}>
              White
            </button>
            <button onClick={() => homeState.selectColor('#000000')}>
              Black
            </button>
          </div>
          <div className="home-color-starting-input">
            <h3>Selected Color: </h3>
            <input
              type="text"
              value={homeState.startCurrentColor}
              onChange={homeState.handleStartColorChange}
            />
            <span>
              {homeState.startRgbColor ? homeState.startRgbColor : ''}
            </span>
          </div>
          <div className="home-color-ending-input">
            <h3>Desired Hex Color: </h3>
            <input
              type="text"
              onChange={homeState.handleEndColorChange}
            />
            <span>{homeState.endRgbColor ? homeState.endRgbColor : ''}</span>
          </div>
          <div className="home-generate-color">
            <h2>Generate Color Scale</h2>
            {this.renderErrorMessage()}
            <button
              onClick={() => homeState.onGenerateColorClick('lighten')}>
              Lighten Percentage!
            </button>
            <button
              onClick={() => homeState.onGenerateColorClick('darken')}>
              Darken Percentage!
            </button>
          </div>
          {this.renderGeneratedResult()}
        </div>
      </div>
    );
  }
}

export default Home;
