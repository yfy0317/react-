// var _ = require('lodash')
import React from "react";
import { connect } from "react-redux";
import styles from "./Loading.scss";

@connect(
    state => ({ loading: state.vars.loading }),
    dispatch => ({})
)
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    render() {
        return (
            <div>
                <div className={styles.report_loading}>
                    <div className={styles.report_main}>
                        <div className={styles.item_inner}>
                            <div className={styles.item_loader_container}>
                                <div
                                    className={`${styles.la_ball_clip_rotate} ${
                                        styles.la_2x
                                    }`}
                                >
                                    <div />
                                </div>
                            </div>
                        </div>
                        <div className={styles.report_values}>数据加载中</div>
                    </div>
                </div>
            </div>
        );
    }
}
