"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Head_1 = require("../../components/Head");
class default_1 extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Head_1.default, { titleText: "LP" }),
            React.createElement("h1", null, "LP")));
    }
}
default_1.getInitialProps = async ({ renderPage }) => {
    return {};
};
exports.default = default_1;
