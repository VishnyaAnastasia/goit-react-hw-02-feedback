import React, { Component } from 'react';
import styles from './Statistics.module.css';
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
      <ul className={styles.statCont}>
        <li className={styles.statInfo}>
          <span className={styles.statInfoName}>Good</span>
          <span className={styles.statInfoResult}>{good}</span>
        </li>
        <li className={styles.statInfo}>
          <span className={styles.statInfoName}>Neutral</span>
          <span className={styles.statInfoResult}>{neutral}</span>
        </li>
        <li className={styles.statInfo}>
          <span className={styles.statInfoName}>Bad</span>
          <span className={styles.statInfoResult}>{bad}</span>
        </li>
        <div className={styles.statInfoMore}>
          <li className={styles.statInfo}>
            <span className={styles.statInfoName}>Total</span>
            <span className={styles.statInfoResult}>
              {countTotalFeedback()}
            </span>
          </li>
          <li className={styles.statInfo}>
            <span className={styles.statInfoName}>Positive feedback</span>
            <span className={styles.statInfoResult}>
              {countPositiveFeedbackPercentage()}%
            </span>
          </li>
        </div>
      </ul>
    );
  }
}
