import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Style } from 'jassy';

import appStyles from './appStyle';

@observer
class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      styles: appStyles()
    }
  }

  renderGeneratedResult = () => {
    if (this.props.appState.generatedColorScalePercentage) {
      return (
        <div className="home-color-result">
          <h3>RESULTS! For Lighten Percentage:</h3>
          <h1>
            {`$variable: `}
            <span>{this.props.appState.generatedColorScalePercentage}</span>
          </h1>
        </div>
      )
    } else {
      return null;
    }
  };

  renderErrorMessage = () => {
    if (this.props.appState.generateErrorMessage) {
      return (
        <div className="home-generate-error">
          <p>{this.props.appState.generateErrorMessage}</p>
        </div>
      )
    }
  };

  render() {
    const { appState } = this.props;
    return (
      <div>
        <DevTools />
        <div className="home-container">
          <Style rules={this.state.styles} />
          <div className="home-title">
            <h1>Hello Color Scaler! (BETA)</h1>
            <p>
              {`Currently supporting only Grayscale colors between black
              and white. Will include more colors in the soon!`}
            </p>
          </div>
          <div className="home-choose-color">
            <button onClick={() => appState.selectColor('#ffffff')}>
              White
            </button>
            <button onClick={() => appState.selectColor('#000000')}>
              Black
            </button>
          </div>
          <div className="home-color-starting-input">
            <h3>Selected Color: </h3>
            <input
              type="text"
              disabled={true}
              value={appState.startCurrentColor}
              onChange={appState.handleStartColorChange} />
            <span>{appState.startRgbColor ? appState.startRgbColor : ''}</span>
          </div>
          <div className="home-color-ending-input">
            <h3>Desired Hex Color: </h3>
            <input
              type="text"
              onChange={appState.handleEndColorChange}
            />
            <span>{appState.endRgbColor ? appState.endRgbColor : ''}</span>
          </div>
          <div className="home-generate-color">
            <h2>Generate Color Scale</h2>
            {this.renderErrorMessage()}
            <button
              onClick={() => appState.onGenerateColorClick('lighten')}>
              Lighten Percentage!
            </button>
            <button
              onClick={() => appState.onGenerateColorClick('darken')}>
              Darken Percentage!
            </button>
          </div>
          {this.renderGeneratedResult()}
        </div>
      </div>
    );
  }
}

export default App;
