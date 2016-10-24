import { observable } from 'mobx';

import tinycolor from 'tinycolor2';

import homeStyle from './Home-style.js';

class HomeState {

  // Color Values
  @observable hexColorValue = '#ffffff';
  @observable rgbColorValue = 'rgb(255, 255, 255)';
  @observable hslColorValue = 'hsl(360, 100%, 100%)';
  @observable hsbColorValue = 'hsb(0, 100%, 100%)';
  @observable nameColorValue = 'white';
  @observable scaleColorValue = '#dddddd';

  // Resulted Scaled Color Values
  @observable resultedScaledColorValue = 'lighten() or darken()';
  @observable resultHslScaleColorValue = 'hsl()';
  @observable resultHsbScaleColorValue = 'hsb()';

  // Default Styles
  @observable styles = homeStyle({
    color: 'hsl(360, 100%, 100%)',
    scaleColor: '#dddddd'
  });

  constructor () {
    // When page is loaded, we want to initially set the scaled color
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

  onHsbColorInputChange = (event) => {
    const hsvColorUserInput = event.target.value;
    this.hsbColorValue = hsvColorUserInput;
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
    console.log("COLOR VALUE", colorValue);
    if (tinycolor(colorValue).isValid()) {
      const convertedScaleColor = tinycolor(colorValue);

      this.resultHslScaleColorValue = convertedScaleColor.toHslString();
      this.resultHsbScaleColorValue = convertedScaleColor.toHsvString();

      this.styles = homeStyle({
        color: this.hexColorValue,
        scaleColor: this.scaleColorValue
      });

      for (let index = 0.1; index <= 100.0; index += 0.1) {
        let colorIndex = index.toFixed(1);
        let colorValueToBeConverted;

        const isColorValueDark = tinycolor(this.hexColorValue).isDark();

        if (isColorValueDark) {
          colorValueToBeConverted =
            tinycolor(this.hexColorValue).lighten(colorIndex).toHexString();
        }

        if (!isColorValueDark) {
          colorValueToBeConverted =
            tinycolor(this.hexColorValue).darken(colorIndex).toHexString();
        }


        if (colorValueToBeConverted === convertedScaleColor.toString()) {
          const isPercentOdd = Math.floor(colorIndex) % 2;
          const numberAfterDecimal = Number(colorIndex.toString().split('.')[1]);
          const isOddAndFourOrEight = isPercentOdd && (numberAfterDecimal !== 4 || numberAfterDecimal !== 8);
          const isEvenAndTwoOrSix = !isPercentOdd && (numberAfterDecimal !== 2 || numberAfterDecimal !== 6);
          let colorPercentage = colorIndex;

          // Test with #f7f7f7
          if (isOddAndFourOrEight) {
            colorPercentage = Math.floor(colorIndex);
          }
          else if (isEvenAndTwoOrSix) {
            colorPercentage = Math.floor(colorIndex);
          }

          this.resultedScaledColorValue =
            `${isColorValueDark ? 'lighten' : 'darken'}(${this.hexColorValue}, ${colorPercentage}%)`;

          return;
        }
      }

      const scaleHexString = convertedScaleColor.toHexString();

      this.resultedScaledColorValue =
        `${scaleHexString} is not comparable to ${this.scaleColorValue}`;
    }
  };

  showConvertedColorValues = (colorValue) => {
    this.changeScaleColor(this.scaleColorValue);

    const convertedColor = tinycolor(colorValue);
    const colorFormat = convertedColor.getFormat();

    if (colorFormat === 'hex') {
      this.rgbColorValue = convertedColor.toRgbString();
      this.hslColorValue = convertedColor.toHslString();
      this.hsbColorValue = convertedColor.toHsvString();
      this.nameColorValue = convertedColor.toName();
    }
    else if (colorFormat === 'rgb') {
      this.hslColorValue = convertedColor.toHslString();
      this.hsbColorValue = convertedColor.toHsvString();
      this.hexColorValue = convertedColor.toHexString();
      this.nameColorValue = convertedColor.toName();
    }
    else if (colorFormat === 'hsl') {
      this.rgbColorValue = convertedColor.toRgbString();
      this.hsbColorValue = convertedColor.toHsvString();
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
      this.hsbColorValue = convertedColor.toHsvString();
      this.hexColorValue = convertedColor.toHexString();
    }

    this.styles = homeStyle({
      color: convertedColor.toHexString(),
      scaleColor: this.scaleColorValue
    });
  };

}

export default new HomeState();
