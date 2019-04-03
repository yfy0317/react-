import React from "react";
import parentComponent from "pages/parent_page";

export default class Home extends parentComponent {
  constructor(props) {
    super(props);
  }

  cc() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <div onClick={() => this.cc()}> 首页</div>
      </div>
    );
  }
}
