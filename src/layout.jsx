import React from 'react';
import { Style } from 'jassy';

import defaultStyles from './styles/defaultStyle.js';

class Layout extends React.Component {
  static displayName = 'Layout';

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Style rules={{ ...defaultStyles }} />
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
