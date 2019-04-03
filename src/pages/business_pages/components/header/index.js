import React from "react";
import styles from "./Header.scss";
import PropTypes from "prop-types";
export default class Header extends React.Component {
  goBack = () => {
    window.history.back();
  };
  render() {
    const { title = String } = this.props;
    return (
      <div className={styles.title}>
        <div className={styles.arrows}>
          <div className={styles.left} onClick={() => this.goBack()} />
        </div>
        <div className={styles.center}>{title}</div>
      </div>
    );
  }
}
