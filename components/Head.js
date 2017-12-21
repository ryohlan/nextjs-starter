"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = require("next/head");
const React = require("react");
const Header = ({ titleText }) => (React.createElement(head_1.default, null,
    React.createElement("title", null,
        "Title",
        titleText && ` | ${titleText}`)));
exports.default = Header;
