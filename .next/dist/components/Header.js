"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\Ethereum&Solidity\\Fund IN\\components\\Header.js";

exports.default = function () {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_semanticUiReact.Header, { as: "h2", block: true, style: { marginTop: "10px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_semanticUiReact.Image, { circular: true, src: "https://static.thenounproject.com/png/445105-200.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), " Fund IN"), _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "10px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Fund-IN")), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Campaigns")), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "+")))));
};

// import React from "react";


// import { Header, Image } from 'semantic-ui-react'
// import { Link } from "../routes.js"; 

// const HeaderExampleImage = () => (
//   <Header as='h2' block  style={{ marginTop: "10px" }}>
//     <Image circular src='https://static.thenounproject.com/png/445105-200.png' /> Fund IN
//   </Header>

// )

// export default HeaderExampleImage
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJIZWFkZXIiLCJJbWFnZSIsIkxpbmsiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBTzs7QUFDdEIsQUFBUyxBQUFZLEFBRXJCOzs7Ozs7a0JBQWUsWUFBTSxBQUNuQjt5QkFFRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxHQUFBLGtCQUNHLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssT0FBaEIsTUFBdUIsT0FBTyxFQUFFLFdBQWhDLEFBQThCLEFBQWE7Z0JBQTNDO2tCQUFBLEFBQ0g7QUFERztxQkFDSCxBQUFDLHdDQUFNLFVBQVAsTUFBZ0IsS0FBaEIsQUFBb0I7Z0JBQXBCO2tCQURHLEFBQ0g7QUFBQTtNQUZBLEFBQ0csQUFHSCw2QkFBQSxBQUFDLHVDQUFLLE9BQU8sRUFBRSxXQUFmLEFBQWEsQUFBYTtnQkFBMUI7a0JBQUEsQUFFRTtBQUZGO3FCQUVFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FISixBQUVFLEFBQ0UsQUFHRiw2QkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUVGLCtCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FqQlIsQUFFRSxBQUlBLEFBTUUsQUFJRSxBQUNFLEFBTVQ7QUF4QkQ7O0FBMEJBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJGOi9FdGhlcmV1bSZTb2xpZGl0eS9GdW5kIElOIn0=