import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import AnnotatedMeter from '../Custom/AnnotatedMeter/AnnotatedMeter';
import Title from 'grommet/components/Title';

import '../App/App.css';

class AppTimer extends Component {

  render() {
    return (
      <Box pad='medium'
        justify='center'
        align='center'
        alignSelf='center'
        className='white-text full-height minus-header minh'
        basis='1/2'>
        <AnnotatedMeter
          type='circle'
          legend={false}
          units='min'
          size='medium'
          max={this.props.max}
          series={this.props.series} />
          <Title>
            {this.props.sessionsLeft}&nbsp;left
          </Title>
      </Box>
      );
  }
}


AppTimer.propTypes = {
  max: PropTypes.number,
  series: PropTypes.array,
  sessionsLeft: PropTypes.number
}

export default AppTimer;
