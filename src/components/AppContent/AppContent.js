import React, { Component } from 'react';

import AppSettings from '../AppSettings/AppSettings';
import AppTimer from '../AppTimer/AppTimer';
import Box from 'grommet/components/Box';

import '../App/App.css';

class AppContent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      totalSessions: 1,
      sessionLength: 25,
      breakLength: 5,
      timerOn: false,
      timerTotalSessions: 1,
      timerSessionLength: 0,
      timerBreakLength: 0,
      start: new Date()
    };
  };

  startTimer = () => {
    this.timer = setInterval(this.tick, 50);

    this.setState({
      timerOn: true,
      start: new Date()
    });
  }

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      timerOn: false,
      timerSessionLength: 0,
      timerBreakLength: 0
    });
  };

  tick = () => {
    var elapsed = ((Math.round((new Date() - this.state.start) / 100) / 10) / 60);

    if (this.state.sessionLength >= elapsed) {
      this.setState({
        timerSessionLength: elapsed
      });
    }
    else if (this.state.breakLength >= (elapsed - this.state.timerSessionLength)) {
      this.setState({
        timerBreakLength: elapsed - this.state.timerSessionLength
      });
    }
    else {
      this.stopTimer();

      this.setState({
        timerTotalSessions: this.state.timerTotalSessions - 1
      });

      if (this.state.timerTotalSessions > 0) {
        this.startTimer();
      }
      else {
        this.setState({
          timerTotalSessions: this.state.totalSessions
        });
      }
    }
  }

  getSeries = () => {
    if (!this.state.timerOn) {
      return [
        {"label": "Session", "value": this.state.sessionLength, "colorIndex": "brand"},
        {"label": "Break", "value": this.state.breakLength, "colorIndex": "neutral-2"}
      ];
    }
    else {
      return [
        {"label": "Session", "value": +this.state.timerSessionLength.toFixed(2), "colorIndex": "brand"},
        {"label": "Break", "value": +this.state.timerBreakLength.toFixed(2), "colorIndex": "neutral-2"}
      ];
    }
  }

  getMax = () => {
    return this.state.sessionLength + this.state.breakLength;
  }

  changeTotalSessions = (value) => {
    this.setState({
      totalSessions: value,
      timerTotalSessions: value
    });
  }

  changeSessionLength = (value) => {
    this.setState({
      sessionLength: value
    });
  }

  changeBreakLength = (value) => {
    this.setState({
      breakLength: value
    });
  }

  render() {
    return (
      <Box direction='row'
           align='center'
           texture='https://images.unsplash.com/photo-1489385066515-ae04cd18b2e7?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg='
           justify='center'
           className='custom-bg'>
          <AppTimer
            max={this.getMax()}
            series={this.getSeries()}
            sessionsLeft={this.state.timerTotalSessions}/>
          <AppSettings
            totalSessions={this.state.totalSessions}
            sessionLength={this.state.sessionLength}
            breakLength={this.state.breakLength}
            changeTotalSessions={this.changeTotalSessions}
            changeSessionLength={this.changeSessionLength}
            changeBreakLength={this.changeBreakLength}
            startTimer={this.startTimer}
            stopTimer={this.stopTimer}
            timerOn={this.state.timerOn}/>
      </Box>
      );
  }
}

export default AppContent;
