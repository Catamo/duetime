import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import NumberInput from 'grommet/components/NumberInput';
import Button from 'grommet/components/Button';

import '../App/App.css';

class AppSettings extends Component {

  changeTotalSessionsHandler = (e) => {
      if (typeof this.props.changeTotalSessions === 'function') {
          this.props.changeTotalSessions(Number(e.target.value));
      }
  }

  changeSessionLengthHandler = (e) => {
      if (typeof this.props.changeSessionLength === 'function') {
          this.props.changeSessionLength(Number(e.target.value));
      }
  }

  changeBreakLengthHandler = (e) => {
      if (typeof this.props.changeBreakLength === 'function') {
          this.props.changeBreakLength(Number(e.target.value));
      }
  }

  startTimerHandler = (e) => {
      if (typeof this.props.startTimer === 'function') {
          this.props.startTimer();
      }
  }

  stopTimerHandler = (e) => {
      if (typeof this.props.stopTimer === 'function') {
          this.props.stopTimer();
      }
  }

  render() {
    return (
      <Box justify='center'
        align='center'
        alignSelf='center'
        size={{height: 'large' }}
        basis='1/2'>
        <Form compact={true}>
          <FormField label='Number of Sessions'>
            <NumberInput disabled={this.props.timerOn} min={1} value={this.props.totalSessions} onChange={this.changeTotalSessionsHandler}/>
          </FormField>
          <FormField label='Session Lenght (minutes)'>
            <NumberInput disabled={this.props.timerOn} min={1} value={this.props.sessionLength} onChange={this.changeSessionLengthHandler}/>
          </FormField>
          <FormField label='Break Lenght (minutes)'>
            <NumberInput disabled={this.props.timerOn} min={1} value={this.props.breakLength} onChange={this.changeBreakLengthHandler}/>
          </FormField>
          <Box pad={{vertical: 'medium', between: 'small'}} justify='center' direction='row'>
            <Box pad={{vertical: 'small'}} basis='1/2'>
              <Button label='Begin' primary={true} onClick={!this.props.timerOn ? this.startTimerHandler : null}/>
            </Box>
            <Box pad={{vertical: 'small'}} basis='1/2'>
              <Button className='white-text' label='End' secondary={true} onClick={this.props.timerOn ? this.stopTimerHandler : null}/>
            </Box>
          </Box>
        </Form>
      </Box>
      );
  }
}

AppSettings.propTypes = {
  totalSessions: PropTypes.number,
  sessionLength: PropTypes.number,
  breakLength: PropTypes.number,
  changeTotalSessions: PropTypes.func,
  changeSessionLength: PropTypes.func,
  changeBreakLength: PropTypes.func,
  startTimer: PropTypes.func,
  stopTimer: PropTypes.func,
  timerOn: PropTypes.bool
};

export default AppSettings;
