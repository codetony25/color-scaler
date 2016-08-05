import {
  observable,
  autorun,
  computed
} from 'mobx';

import grayscaleColorList from './GrayscaleColorList';

export default class AppState {
  @observable black = '#000000';
  @observable white = '#ffffff';
  @observable startCurrentColor = '#000000';
  @observable endCurrentColor;
  @observable generatedColorScalePercentage;
  @observable generateErrorMessage;
  @observable startRgbColor = '';
  @observable endRgbColor = '';

  constructor () {
    this.grayscaleColors = grayscaleColorList;
  }

  selectColor = (color) => {
    this.startCurrentColor = color || this.black;
    return this.startCurrentColor;
  };

  handleStartColorChange = () => {
    return;
  };

  handleEndColorChange = (event) => {
    this.endCurrentColor = event.target.value;
  };

  handleErrorMessage = () => {
    this.generateErrorMessage =
      'This is not a valid color hex value. For example: #e0e0e0 or #fff';
  };

  onGenerateColorClick = (shadeType) => {
    console.log('LIGHTEN GENERATE');
    this.generateErrorMessage = '';
    let hexStringArray;

    if (this.endCurrentColor) {
      hexStringArray = this.endCurrentColor.split('');
    }
    else {
      this.handleErrorMessage();
      return;
    }

    if ((hexStringArray.length === 4 ||
        hexStringArray.length === 7) &&
        hexStringArray[0] === '#'
    ) {

      if (hexStringArray[1] === hexStringArray[2] &&
          hexStringArray[1] === hexStringArray[3] &&
          hexStringArray.length === 4
      ) {
        this.endCurrentColor =
          `${this.endCurrentColor}${hexStringArray[1]}${hexStringArray[1]}${hexStringArray[1]}`;
      }


      this.endRgbColor = this.convertHexToRgb(this.endCurrentColor);
      this.startRgbColor = this.convertHexToRgb(this.startCurrentColor);

      for (let key in grayscaleColorList) {
        if (grayscaleColorList[key].hex === this.endCurrentColor.toUpperCase()) {
          this.generatedColorScalePercentage =
            `lighten(${this.startCurrentColor}, ${grayscaleColorList[key].percent}%);`;
          return;
        }
      }
    }
    else {
      this.handleErrorMessage();
    }

  };

  convertHexToRgb = (hex, opacity) => {
    if (hex.split('')[0] !== '#' && hex.split('').length !== 7) {
      console.warn(
        `function: convertHexToRgb has to have at least 7 characters
         or and has to be a hex string like this: #e0e0e0`
      );
    }

    hex = hex.replace('#','');

    let result,
      red = parseInt(hex.substring(0,2), 16),
      green = parseInt(hex.substring(2,4), 16),
      blue = parseInt(hex.substring(4,6), 16);

    if (!opacity) {
      result = `rgb(${red}, ${green}, ${blue})`;
    } else {
      result = `rgba(${red}, ${green}, ${blue}, ${opacity / 100})`;
    }

    return result;
  };

  shadeColor = (color, percent) => {
    var red = parseInt(color.substring(1,3), 16);
    var green = parseInt(color.substring(3,5), 16);
    var blue = parseInt(color.substring(5,7), 16);

    red = parseInt(red * (100 + percent) / 100);
    green = parseInt(green * (100 + percent) / 100);
    blue = parseInt(blue * (100 + percent) / 100);

    red = (red < 255) ? red : 255;
    green = (green < 255) ? green : 255;
    blue = (blue < 255) ? blue : 255;

    var RR = ((red.toString(16).length==1)?"0"+red.toString(16):red.toString(16));
    var GG = ((green.toString(16).length==1)?"0"+green.toString(16):green.toString(16));
    var BB = ((blue.toString(16).length==1)?"0"+blue.toString(16):blue.toString(16));

    return {
      R: RR,
      G: GG,
      B: BB
    }
  };

}
