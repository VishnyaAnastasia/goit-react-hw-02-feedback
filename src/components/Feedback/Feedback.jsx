import React, { Component } from 'react';

import styles from './Feedback.module.css';
// import PropTypes from 'prop-types';

export class Feedback extends Component {
  render() {
    const { clickHandler } = this.props;
    return (
      <div className={styles.btnContainer}>
        <button
          className={styles.btnFeedback}
          name="good"
          onClick={clickHandler}
        >
          Good
        </button>
        <button
          className={styles.btnFeedback}
          name="neutral"
          onClick={clickHandler}
        >
          Neutral
        </button>
        <button
          className={styles.btnFeedback}
          name="bad"
          onClick={clickHandler}
        >
          Bad
        </button>
      </div>
    );
  }
}

// Profile.propTypes = {

// };
