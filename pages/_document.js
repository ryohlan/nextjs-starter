"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("babel-polyfill");
require("isomorphic-fetch");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const document_1 = require("next/document");
const React = require("react");
class MyDocument extends document_1.default {
    render() {
        return (React.createElement("html", null,
            React.createElement(document_1.Head, null,
                React.createElement("title", null, "Title"),
                React.createElement("meta", { charSet: "utf-8" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" }),
                React.createElement("link", { rel: "stylesheet", type: "text/css", href: "/static/css/default.css", media: "screen" })),
            React.createElement("body", null,
                React.createElement(MuiThemeProvider_1.default, null,
                    React.createElement(document_1.Main, null),
                    React.createElement(document_1.NextScript, null)))));
    }
}
MyDocument.getInitialProps = async ({ renderPage }) => {
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks };
};
exports.default = MyDocument;
