/*eslint-disable*/
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "reduxs/store";
import RouterEntry from "routers/RouterEntry";
import { BrowserRouter } from "react-router-dom";
import fastClick from "fastclick";

fastClick.attach(document.body);
const renders = Component =>
    render(
        <Provider store={store}>
            <div>
                <BrowserRouter>
                    <Component />
                </BrowserRouter>
            </div>
        </Provider>,
        document.getElementById("root")
    );
renders(RouterEntry);
export default renders;
// 取消警告
console.disableYellowBox = true;
