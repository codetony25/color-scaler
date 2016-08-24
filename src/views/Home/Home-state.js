import {
  observable,
  autorun,
  computed
} from 'mobx';

class homeState {
  @observable startCurrentColor = '#000000';
  @observable endCurrentColor;
  @observable generatedColorScalePercentage;
  @observable generateErrorMessage;
  @observable startRgbColor = '';
  @observable endRgbColor = '';

  constructor () {
    this.storeGrayscaleColors = {};

    autorun(() => {
      this.generateGrayscaleColors();
    });
  }

  selectColor = (color) => {
    this.startCurrentColor = color;
    this.generateGrayscaleColors();
    return this.startCurrentColor;
  };

  handleStartColorChange = (event) => {
    this.startCurrentColor = event.target.value;
    return;
  };

  handleEndColorChange = (event) => {
    this.endCurrentColor = event.target.value;
  };

  handleErrorMessage = () => {
    this.generateErrorMessage =
      'This is not a valid color hex value. For example: #e0e0e0 or #fff';
  };

  generateGrayscaleColors = () => {
    for (var i = 0; i <= 10000; i++) {
      let percent = i / 10000,
        fixedPercent = (percent * 100).toFixed(1),
        numberAfterDecimal = Number((fixedPercent / 10).toString().split('')[2]),
        numberBeforeDecimal = Number((fixedPercent / 10).toString().split('')[0]),
        hexString = this.shadeColor(this.startCurrentColor, percent);

      if (numberAfterDecimal === 2 ||
        numberAfterDecimal === 4 ||
        numberAfterDecimal === 6 ||
        numberAfterDecimal === 8 ||
        fixedPercent / 10 === 10
      ) {
        fixedPercent = Math.floor(Number(fixedPercent));
      }

      this.storeGrayscaleColors[hexString] = {
        hexColor: hexString.toUpperCase(),
        percent: fixedPercent
      };
    }
  };

  onGenerateColorClick = (shadeType) => {
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
      this.endCurrentColor = this.endCurrentColor.toUpperCase();

      for (let key in this.storeGrayscaleColors) {
        if (this.storeGrayscaleColors[key].hexColor === this.endCurrentColor) {
          let colorPercent = this.storeGrayscaleColors[key].percent;

          if (shadeType === 'darken') {
            console.log('this.startCurrentColor', this.startCurrentColor);
            colorPercent = Math.abs(colorPercent - 100.0).toString();
            console.log('colorPercent', colorPercent);
          }

          this.generatedColorScalePercentage =
            `${shadeType}(${this.startCurrentColor}, ${colorPercent}%);`;
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

    hex = hex.replace('#', '');

    let result,
      red = parseInt(hex.substring(0, 2), 16),
      green = parseInt(hex.substring(2, 4), 16),
      blue = parseInt(hex.substring(4, 6), 16);

    if (!opacity) {
      result = `rgb(${red}, ${green}, ${blue})`;
    } else {
      result = `rgba(${red}, ${green}, ${blue}, ${opacity / 100})`;
    }

    return result;
  };


  shadeColor = (color, percent) => {
    var f=parseInt(color.slice(1),16),
      t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
  };

  blendColors = (c0, c1, p) => {
    var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
    return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
  };

}

export default new homeState();
