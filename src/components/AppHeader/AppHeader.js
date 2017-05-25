import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

class AppHeader extends Component {
  render() {
    return (
      <Header splash={false}
        colorIndex='brand'
        pad={{horizontal:'medium'}}>
        <Title>
          Duetime <small><small>Demo</small></small>
        </Title>
      </Header>
      );
  }
}

export default AppHeader;
