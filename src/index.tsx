import React from "react";
import styles from './main.scss';

class x {
  x() {
    return <button className={styles.test}>test</button>;
  }
}

export function Button(){
  return <button className={styles.test}>test</button>;
};

export default x;