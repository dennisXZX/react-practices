import React, { Component } from 'react';
import './App.css';

// import LotteryStatsDemo from './LotteryStatistics/LotteryStatsDemo'
import ProgressBarDemo from './ProgressBar/ProgressBarDemo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Uncomment the React component you want to see in source code</h2>

        <div className="demo-area">
          {/*<LotteryStatsDemo />*/}
          <ProgressBarDemo />
        </div>
      </div>
    );
  }
}

export default App;
