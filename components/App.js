"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("babel-polyfill");
require("isomorphic-fetch");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const React = require("react");
const Head_1 = require("./Head");
const app = ({ children, title }) => (React.createElement(MuiThemeProvider_1.default, null,
    React.createElement("main", null,
        React.createElement(Head_1.default, { titleText: title }),
        children)));
exports.default = app;
