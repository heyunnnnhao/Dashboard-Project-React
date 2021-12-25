import { useState, useEffect } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import styles from './index.module.scss';

export default function Loading() {
  return <div className={styles.loadingContainer}> <CircularProgress thickness={2} size={30} /></div>;
}
