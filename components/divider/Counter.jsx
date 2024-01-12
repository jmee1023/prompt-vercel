"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className={styles.counterContainer}>
      <button className={styles.counterButton} onClick={handleClick}>
        Add one
      </button>
      <button className={styles.counterButton} onClick={handleReset}>
        Reset
      </button>
      <p className={styles.counterValue}>{count}</p>
    </div>
  );
};

export default Counter;
