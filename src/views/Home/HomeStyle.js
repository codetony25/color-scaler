const homeStyles = () => {
  return {
    '.home-container': {

      '.home-title': {
        textAlign: 'center',
        paddingTop: 30,
        color: 'red',

        'p': {
          color: 'blue'
        }
      },

      '.home-choose-color': {
        textAlign: 'center',

        'button': {
          width: 100,
          height: 40
        },

        'button:first-child': {
          marginRight: 50
        }
      },

      '.home-color-starting-input': {
        textAlign: 'center',

        'h3': {
          display: 'inline-block',
          width: 220
        },

        'input': {
          margin: 30,
          padding: 20,
          fontSize: 25
        }
      },

      '.home-color-ending-input': {
        textAlign: 'center',

        'h3': {
          display: 'inline-block',
          width: 220,
          flaot: 'left'
        },

        'input': {
          margin: 30,
          padding: 20,
          fontSize: 25
        }
      },

      '.home-generate-color': {
        textAlign: 'center',
        margin: 50,

        'button': {
          width: 150,
          height: 60,
          marginRight: 25
        },
      },

      '.home-color-result': {
        textAlign: 'center',

        'h1': {
          color: 'green'
        },

        'span': {
          color: 'purple'
        }
      },

      '.home-generate-error': {
        textAlign: 'center',

        'p': {
          color: 'red'
        }
      }
    }
  };
};

export default homeStyles;
