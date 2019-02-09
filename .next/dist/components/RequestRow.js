"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\Ethereum&Solidity\\Fund IN\\components\\RequestRow.js";


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading1: false,
      loading2: false,
      errorMessage: ""
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({ loading1: true });
              _context.prev = 1;
              _context.next = 4;
              return _web2.default.eth.getAccounts();

            case 4:
              accounts = _context.sent;
              _context.next = 7;
              return (0, _campaign2.default)(_this.props.address);

            case 7:
              campaign = _context.sent;
              _context.next = 10;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 10:
              _routes.Router.replace("/campaigns/" + _this.props.address + "/requests");
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);

              _this.setState({ errorMessage: _context.t0.message });

            case 16:
              _this.setState({ loading1: false });

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[1, 13]]);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({ loading2: true });
              _context2.prev = 1;
              _context2.next = 4;
              return _web2.default.eth.getAccounts();

            case 4:
              accounts = _context2.sent;
              _context2.next = 7;
              return (0, _campaign2.default)(_this.props.address);

            case 7:
              campaign = _context2.sent;
              _context2.next = 10;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 10:
              _routes.Router.replace("/campaigns/" + _this.props.address + "/requests");
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](1);

              _this.setState({ errorMessage: _context2.t0.message });

            case 16:
              _this.setState({ loading2: false });

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[1, 13]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      var readyToFinalize = request.approvalCount > approversCount / 2;

      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, request.value), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, request.approvalCount, " / ", approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: "green",
        basic: true,
        onClick: this.onApprove,
        loading: this.state.loading1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Approve")), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
        color: "teal",
        basic: true,
        onClick: this.onFinalize,
        loading: this.state.loading2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Finalize")));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSb3V0ZXIiLCJSZXF1ZXN0Um93Iiwic3RhdGUiLCJsb2FkaW5nMSIsImxvYWRpbmcyIiwiZXJyb3JNZXNzYWdlIiwib25BcHByb3ZlIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwicHJvcHMiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwicmVwbGFjZSIsIm1lc3NhZ2UiLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPLEFBQVE7O0FBQ3hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUSxBQUFhOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7O29OQUNKLEE7Z0JBQVEsQUFDSSxBQUNWO2dCQUZNLEFBRUksQUFDVjtvQkFITSxBLEFBR1E7QUFIUixBQUNOLGEsQUFLRixxRkFBWSxtQkFBQTtvQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFDVjtvQkFBQSxBQUFLLFNBQVMsRUFBRSxVQUROLEFBQ1YsQUFBYyxBQUFZOzhCQURoQjs4QkFBQTtxQkFHZSxjQUFBLEFBQUssSUFIcEIsQUFHZSxBQUFTOztpQkFBMUI7QUFIRSxrQ0FBQTs4QkFBQTtxQkFJZSx3QkFBUyxNQUFBLEFBQUssTUFKN0IsQUFJZSxBQUFvQjs7aUJBQXJDO0FBSkUsa0NBQUE7OEJBQUE7OEJBS0YsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDO3NCQUM3QyxTQU5BLEFBS0YsQUFBb0QsQUFDbEQsQUFBUztBQUR5QyxBQUN4RCxlQURJOztpQkFHTjs2QkFBQSxBQUFPLHdCQUFzQixNQUFBLEFBQUssTUFBbEMsQUFBd0MsVUFSaEM7OEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7OENBVVI7O29CQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFWdEIsQUFVUixBQUFjLEFBQW9COztpQkFFcEM7b0JBQUEsQUFBSyxTQUFTLEVBQUUsVUFaTixBQVlWLEFBQWMsQUFBWTs7aUJBWmhCO2lCQUFBOzhCQUFBOztBQUFBOytCQUFBO0EsZUFlWixBLHNGQUFhLG9CQUFBO29CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUNYO29CQUFBLEFBQUssU0FBUyxFQUFFLFVBREwsQUFDWCxBQUFjLEFBQVk7K0JBRGY7K0JBQUE7cUJBR2MsY0FBQSxBQUFLLElBSG5CLEFBR2MsQUFBUzs7aUJBQTFCO0FBSEcsbUNBQUE7K0JBQUE7cUJBSWMsd0JBQVMsTUFBQSxBQUFLLE1BSjVCLEFBSWMsQUFBb0I7O2lCQUFyQztBQUpHLG1DQUFBOytCQUFBOzhCQUtILEFBQVMsUUFBVCxBQUFpQixnQkFBZ0IsTUFBQSxBQUFLLE1BQXRDLEFBQTRDLElBQTVDLEFBQWdEO3NCQUM5QyxTQU5DLEFBS0gsQUFBcUQsQUFDbkQsQUFBUztBQUQwQyxBQUN6RCxlQURJOztpQkFHTjs2QkFBQSxBQUFPLHdCQUFzQixNQUFBLEFBQUssTUFBbEMsQUFBd0MsVUFSL0I7K0JBQUE7QUFBQTs7aUJBQUE7K0JBQUE7Z0RBVVQ7O29CQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsYUFWckIsQUFVVCxBQUFjLEFBQW9COztpQkFFcEM7b0JBQUEsQUFBSyxTQUFTLEVBQUUsVUFaTCxBQVlYLEFBQWMsQUFBWTs7aUJBWmY7aUJBQUE7K0JBQUE7O0FBQUE7Z0NBQUE7QTs7Ozs7NkJBZUo7VUFBQSxBQUNDLE1BREQsQUFDZSx1QkFEZixBQUNDO1VBREQsQUFDTSxPQUROLEFBQ2UsdUJBRGYsQUFDTTttQkFDMkIsS0FGakMsQUFFc0M7VUFGdEMsQUFFQyxZQUZELEFBRUM7VUFGRCxBQUVLLGlCQUZMLEFBRUs7VUFGTCxBQUVjLHdCQUZkLEFBRWMsQUFDckI7O1VBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQStELEFBRS9EOzs2QkFDRyxjQUFELE9BQUssVUFBVSxRQUFmLEFBQXVCLFVBQVUsVUFBYSxtQkFBbUIsQ0FBQyxRQUFsRSxBQUEwRTtvQkFBMUU7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FERixBQUNFLEFBQ0EscUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBRkYsQUFFRSxBQUFlLEFBQ2YsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBSEYsQUFHRSxBQUFlLEFBQ2Ysd0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBSkYsQUFJRSxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsaUJBQUEsQUFDVyxlQUFrQixPQU4vQixBQUtFLEFBSUEsaUNBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsaUJBQ0csQUFBUSxXQUFSLEFBQW1CLHVCQUNsQixBQUFDO2VBQUQsQUFDUSxBQUNOO2VBRkYsQUFHRTtpQkFBUyxLQUhYLEFBR2dCLEFBQ2Q7aUJBQVMsS0FBQSxBQUFLLE1BSmhCLEFBSXNCOztvQkFKdEI7c0JBQUE7QUFBQTtBQUNFLE9BREYsRUFYTixBQVNFLEFBRUksQUFVSiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxpQkFDRyxBQUFRLFdBQVIsQUFBbUIsdUJBQ2xCLEFBQUM7ZUFBRCxBQUNRLEFBQ047ZUFGRixBQUdFO2lCQUFTLEtBSFgsQUFHZ0IsQUFDZDtpQkFBUyxLQUFBLEFBQUssTUFKaEIsQUFJc0I7O29CQUp0QjtzQkFBQTtBQUFBO0FBQ0UsT0FERixFQXhCUixBQUNFLEFBcUJFLEFBRUksQUFhVDs7Ozs7QUEvRXNCLEEsQUFrRnpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiRjovRXRoZXJldW0mU29saWRpdHkvRnVuZCBJTiJ9