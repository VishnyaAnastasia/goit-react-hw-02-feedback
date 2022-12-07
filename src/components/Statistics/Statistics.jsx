import React, { Component } from 'react';
// import styles from './Statistics.module.css';
// import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const {
      good,
      neutral,
      bad,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this.props;
    return (
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{countTotalFeedback()}</li>
        <li>Positive feedback:{countPositiveFeedbackPercentage()}%</li>
      </ul>
    );
  }
}
