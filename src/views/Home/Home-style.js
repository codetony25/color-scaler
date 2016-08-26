const homeStyles = (options) => {

  return {
    '.home-title': {
      textAlign: 'center',
      paddingTop: 30,
      color: 'red',

      'p': {
        color: 'blue'
      }
    },

    '.home-container': {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',

      '.home-color-input-container': {
        textAlign: 'center',

        'input': {
          textAlign: 'center',
          margin: 10,
          padding: 18,
          fontSize: 20,
          width: '90%',
          boxShadow: `0px -1px 0px 25px ${options.color}`
        },

        '.scale-color-input': {
          boxShadow: `0px -1px 0px 25px ${options.scaleColor}`,
          margin: 30
        },

        'h2': {
          color: 'green'
        },

        'h3': {
          padding: '20px 0'
        },

        'h4': {
          textAlign: 'left',
          color: 'blueviolet',
          paddingLeft: 20
        },

        'p': {
          color: 'deeppink',
          fontWeight: 'bold',
          fontSize: 20
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
