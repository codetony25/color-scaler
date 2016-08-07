const defaultStyles = {
  'html': {
    boxSizing: 'border-box',
    height: '100%'
  },

  'body': {
    margin: 0,
    padding: 0,
    minHeight: '100%',
    position: 'relative',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility'
  },

  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },

  'a': {
    textDecoration: 'none',
    cursor: 'pointer'
  },

  'ul, ol': {
    listStyle: 'none',
    padding: 0
  }
};

export default defaultStyles;
