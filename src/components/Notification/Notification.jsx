import React from 'react';

import styles from './Notification.module.css';
// import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className={styles.messageInfo}>{message}</p>;
};
