import React, { Component } from "react";
import { setTitle } from "utils/SetTitle.js";
import RouterGo from "./RouterGo.js";
import Header from "pages/business_pages/components/header";
import { withRouter } from "react-router-dom";

@withRouter
export default class Routers extends Component {
    // componentWillUnmount() {
    //   RouterGo(this.props)
    // }
    componentWillMount() {
        console.log("1111111");
    }
    render() {
        RouterGo(this.props);
        return (
            <div>
                <Header title={this.props.router.title} />
                <this.props.router.component {...this.props}>
                    {setTitle(this.props.router.title)}
                </this.props.router.component>
            </div>
        );
    }
}
