import React, { Component } from 'react';

// import styles from './Feedback.module.css';
// import PropTypes from 'prop-types';

export class Feedback extends Component {
  render() {
    const { clickHandler } = this.props;
    return (
      <div>
        <button name="good" onClick={clickHandler}>
          Good
        </button>
        <button name="neutral" onClick={clickHandler}>
          Neutral
        </button>
        <button name="bad" onClick={clickHandler}>
          Bad
        </button>
      </div>
    );
  }
}
