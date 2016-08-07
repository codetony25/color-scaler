import { Component, PropTypes } from 'react'

class ProvideInsertCss extends Component {

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired
  };

  getChildContext() {
    const { insertCss } = this.props;
    return { insertCss }
  }

  render() {
    const { children } = this.props;
    return children
  }

}

export default ProvideInsertCss
