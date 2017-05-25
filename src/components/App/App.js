import React, { Component } from 'react';
import App from 'grommet/components/App';

import AppHeader from '../AppHeader/AppHeader';
import AppContent from '../AppContent/AppContent';

import '../../external/css/grommet.min.css';

class Duetime extends Component {
  render() {
    return (
      <App centered={false}>
        <AppHeader />
        <AppContent />
      </App>
    );
  }
}

export default Duetime;
