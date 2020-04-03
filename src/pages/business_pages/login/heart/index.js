import React from "react";
import parentComponent from "pages/parent_page";

export default class Login extends parentComponent {
  constructor(props) {
    super(props);
  }

  ccc() {
    this.props.history.push("/home");
  }

  render() {
    return (
      <div>
        <div onClick={() => this.ccc()}> 我改了333</div>
      </div>
    );
  }
}
