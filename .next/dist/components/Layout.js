"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("./Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _semanticUiReact = require("semantic-ui-react");

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\Ethereum&Solidity\\Fund IN\\components\\Layout.js";

exports.default = function (props) {
  var Background = "http://wrbbradio.org/wp-content/uploads/2016/10/grey-background-for-site11.jpg";
  var style = {
    backgroundImage: "url(" + Background + ")",
    width: "100%",
    height: "850px",
    margin: "0 0",
    backgroundRepeat: "no-repeat" };

  return _react2.default.createElement("section", { style: style, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), props.children));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkNvbnRhaW5lciIsIkhlYWQiLCJCYWNrZ3JvdW5kIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImJhY2tncm91bmRSZXBlYXQiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVM7O0FBQ1QsQUFBTyxBQUVQOzs7Ozs7OztrQkFBZSxpQkFBUyxBQUN2QjtNQUFJLGFBQUosQUFBaUIsQUFDakI7TUFBSSxRQUFNLEFBQ1I7cUJBQWlCLFNBQUEsQUFBUyxhQURsQixBQUMrQixBQUN2QztXQUZRLEFBRUYsQUFDTjtZQUhRLEFBR0EsQUFDUjtZQUpRLEFBSUEsQUFDUjtzQkFMRixBQUFVLEFBS1UsQUFFbkI7O3lCQUNFLGNBQUEsYUFBUyxPQUFULEFBQWdCO2dCQUFoQjtrQkFBQSxBQUNBO0FBREE7R0FBQSxrQkFDQSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQTtTQUNFLEFBQ00sQUFDSjtVQUZGLEFBRU87O2dCQUZQO2tCQUZKLEFBQ0UsQUFDRSxBQUtGO0FBTEU7QUFDRSx1QkFJSixBQUFDOztnQkFBRDtrQkFQRixBQU9FLEFBQ0M7QUFERDtBQUFBLFlBVEosQUFDRSxBQUNBLEFBUVMsQUFJWjtBQXZCRCIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiRjovRXRoZXJldW0mU29saWRpdHkvRnVuZCBJTiJ9