import React from "react";
import styles from "./Header.scss";
import icon from "../../../../assets/images/headerImg/backBlack.png";
import store from "reduxs/store";

export default class Header extends React.Component {
  goBack() {
    window.history.back();
  }

  componentDidMount() {}

  render() {
    const { title } = this.props;
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
