import {
  observable,
  autorun,
  computed
} from 'mobx';

import tinycolor from 'tinycolor2';

import homeStyle from './Home-style.js';

class HomeState {
  @observable styles = homeStyle({
    color: 'hsl(360, 100%, 100%)',
    scaleColor: '#dddddd'
  });
  @observable hexColorValue = '#ffffff';
  @observable rgbColorValue = 'rgb(255, 255, 255)';
  @observable hslColorValue = 'hsl(360, 100%, 100%)';
  @observable hsvColorValue = 'hsv(0, 100%, 100%)';
  @observable nameColorValue = 'white';
  @observable scaleColorValue = '#dddddd';

  @observable resultLightenScaleColorValue = 'lighten()';
  @observable resultDarkenScaleColorValue = 'darken()';
  @observable resultHslScaleColorValue = 'hsl()';
  @observable resultHsvScaleColorValue = 'hsv()';

  constructor () {
    this.changeScaleColor(this.scaleColorValue);
  }

  /**
   * When user enters in a hex color, it will do a test to see if it is a
   * valid hex color string, if it is then we will convert it to its values
   * for rgb and rgba.
   *
   */
  onHexColorInputChange = (event) => {
    const hexColorUserInput = event.target.value;
    const maximumHexLength = 7;
    const hexValueInputLength = event.target.value.length;

    // Does not let hex value pass 7 characters for the input field
    if (hexValueInputLength <= maximumHexLength) {
      this.hexColorValue = event.target.value;
    }

    if (tinycolor(hexColorUserInput).isValid()) {
      this.showConvertedColorValues(hexColorUserInput);
    }
  };


  onRgbColorInputChange = (event) => {
    const rgbColorUserInput = event.target.value;
    this.rgbColorValue = rgbColorUserInput;

    if (tinycolor(rgbColorUserInput).isValid()) {
      this.showConvertedColorValues(rgbColorUserInput);
    }
  };

  onHslColorInputChange = (event) => {
    const hslColorUserInput = event.target.value;
    this.hslColorValue = hslColorUserInput;
    if (tinycolor(hslColorUserInput).isValid()) {
      this.showConvertedColorValues(hslColorUserInput);
    }
  };

  onHsvColorInputChange = (event) => {
    const hsvColorUserInput = event.target.value;
    this.hsvColorValue = hsvColorUserInput;
    if (tinycolor(hsvColorUserInput).isValid()) {
      this.showConvertedColorValues(hsvColorUserInput);
    }
  };

  onNameColorInputChange = (event) => {
    const nameColorUserInput = event.target.value;
    this.nameColorValue = nameColorUserInput;
    if (tinycolor(nameColorUserInput).isValid()) {
      this.showConvertedColorValues(nameColorUserInput);
    }
  };

  onScaleColorInputChange = (event) => {
    const scaleColorUserInput = event.target.value;
    this.scaleColorValue = scaleColorUserInput;
    this.changeScaleColor(scaleColorUserInput);
  };

  changeScaleColor = (colorValue) => {
    if (tinycolor(colorValue).isValid()) {
      const convertedScaleColor = tinycolor(colorValue);

      this.resultHslScaleColorValue = convertedScaleColor.toHslString();
      this.resultHsvScaleColorValue = convertedScaleColor.toHsvString();

      this.styles = homeStyle({
        color: this.hexColorValue,
        scaleColor: this.scaleColorValue
      });

      for (let index = 0.1; index < 100.0; index += 0.1) {
        const colorIndex = index.toFixed(1);
        const currentLightHexColor =
          tinycolor(this.hexColorValue).lighten(colorIndex).toHexString();
        const currentDarkHexColor =
          tinycolor(this.hexColorValue).darken(colorIndex).toHexString();

        if (currentLightHexColor === convertedScaleColor.toString()) {
          this.resultLightenScaleColorValue =
            `lighten(${this.hexColorValue}, ${colorIndex}%)`;
        }

        if (currentDarkHexColor === convertedScaleColor.toString()) {
          this.resultDarkenScaleColorValue =
            `darken(${this.hexColorValue}, ${colorIndex}%)`;
        }
      }
    }
  };

  showConvertedColorValues = (colorValue) => {
    this.changeScaleColor(colorValue);

    const convertedColor = tinycolor(colorValue);
    const colorFormat = convertedColor.getFormat();

    if (colorFormat === 'hex') {
      this.rgbColorValue = convertedColor.toRgbString();
      this.hslColorValue = convertedColor.toHslString();
      this.hsvColorValue = convertedColor.toHsvString();
      this.nameColorValue = convertedColor.toName();
    }
    else if (colorFormat === 'rgb') {
      this.hslColorValue = convertedColor.toHslString();
      this.hsvColorValue = convertedColor.toHsvString();
      this.hexColorValue = convertedColor.toHexString();
      this.nameColorValue = convertedColor.toName();
    }
    else if (colorFormat === 'hsl') {
      this.rgbColorValue = convertedColor.toRgbString();
      this.hsvColorValue = convertedColor.toHsvString();
      this.hexColorValue = convertedColor.toHexString();
      this.nameColorValue = convertedColor.toName();
    }
    else if (colorFormat === 'hsv') {
      this.rgbColorValue = convertedColor.toRgbString();
      this.hslColorValue = convertedColor.toHslString();
      this.hexColorValue = convertedColor.toHexString();
      this.nameColorValue = convertedColor.toName();
    }
    else if (colorFormat === 'name') {
      this.rgbColorValue = convertedColor.toRgbString();
      this.hslColorValue = convertedColor.toHslString();
      this.hsvColorValue = convertedColor.toHsvString();
      this.hexColorValue = convertedColor.toHexString();
    }

    this.styles = homeStyle({
      color: convertedColor.toHexString(),
      scaleColor: this.scaleColorValue
    });
  };

}

export default new HomeState();
