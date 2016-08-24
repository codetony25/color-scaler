import React from 'react';
import { Style } from 'jassy';

import defaultStyle from './styles/default-style.js';

class Layout extends React.Component {
  static displayName = 'Layout';

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Style rules={{ ...defaultStyle }} />
        <div className="main-container">
          <div className="view-container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
