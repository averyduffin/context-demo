import React, { useState } from 'react';
import styles from './CounterWithContext.module.css';
import { useStateContext, useDispatchContext } from '../../context/CounterContext';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from '../../oldReduxActionsReducer'

export function CounterWithContext() {
  const count = useStateContext().value;
  const dispatch = useDispatchContext();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => incrementAsync(Number(incrementAmount) || 0)(dispatch)}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
