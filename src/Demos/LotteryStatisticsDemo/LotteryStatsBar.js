import React, { Component } from 'react'
import classNames from 'classnames'
import './LotteryStatsBar.css'

class LotteryStatsBar extends Component {
  render () {
    const {
      number,
      lastDrawn,
      drawFrequency,
      maxLastDrawn,
      maxDrawFrequency
    } = this.props

    const lastDrawClass = classNames(
      'last-drawn-percent',
      {'last-drawn-percent-bg': lastDrawn >= 1 }
    );

    const drawFrequencyClass = classNames(
      'draw-frequency-percent',
      { 'draw-frequency-percent-bg': drawFrequency >= 1 }
    )

    const drawFrequencyPercent = Math.floor((90 * drawFrequency) / maxDrawFrequency);
    const lastDrawnPercent = Math.floor((90 * lastDrawn) / maxLastDrawn);

    return (
      <div className="bar-container">
        <div className="bar-last-drawn">
          <div className={lastDrawClass}
               style={{ width : lastDrawnPercent + '%' }}>
            {lastDrawn}
          </div>
        </div>

        <div
          className="bar-number">
          {number}
        </div>

        <div className="bar-draw-frequency">
          <div className={drawFrequencyClass}
               style={{ width : drawFrequencyPercent + '%' }}>
            {drawFrequency}
          </div>
        </div>
      </div>
    )
  }
}

export default LotteryStatsBar
