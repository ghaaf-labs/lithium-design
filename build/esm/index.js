import React from 'react';
import styles from './main.scss.js';

class x {
  x() {
    return /*#__PURE__*/React.createElement("button", {
      className: styles.test
    }, "test");
  }

}

function Button() {
  return /*#__PURE__*/React.createElement("button", {
    className: styles.test
  }, "test");
}

export { Button, x as default };
