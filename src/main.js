import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter} from "react-router-dom";
import App from "./App";
import 'antd/dist/antd.min.css'
// import HashHistory from "react-router-dom"
const root=ReactDOM.createRoot(document.getElementById("app"));
root.render(<HashRouter>
    <App/>
</HashRouter>);
