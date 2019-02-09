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

var _campaign = require("../ethereum/campaign.js");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\Ethereum&Solidity\\Fund IN\\components\\ContributeForm.js";


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: "",
      errorMessage: "",
      value: ""
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /*pasando el objeto event*/
                event.preventDefault();
                campaign = (0, _campaign2.default)(_this.props.address); /*tengo acceso a la propiedad
                                                                         address que viene desde otro archivo que en mi caso es desde el archivo show.js*/

                _this.setState({ loading: true, errorMessage: "" });
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.contribute(_this.state.value).send({
                  from: accounts[0]
                  //  value: web3.utils.toWei(this.state.value, "ether")
                });

              case 9:
                _routes.Router.replace("/campaigns/" + _this.props.address); /*en este caso uso
                                                                             la propiedad replace para que se reemplace la pagina actual con la misma
                                                                             pero actualizada, osea se renderiza nuevamente.
                                                                             Si le pusiera pushRoute entonces se crearia un registro en el webbrowser de
                                                                             la misma pagina lo que no quiero, puesto que no quiero que al hacer atras
                                                                             me devuelva al mismo sitio donde estoy*/
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:
                _this.setState({ loading: false });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement("img", { src: "https://images.mixer.com/svGhCSLsSmCcLefjYXaDuZvTb9ZLCBb3A6Y3IHLyA1qA/https://cdn.discordapp.com/attachments/334441124217225216/424483345813209088/donate.gif", __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Contribute to this campaign"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "ether",
        labelPosition: "right",
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "There was an error",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: !!this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "Contribute!"));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSW5wdXQiLCJNZXNzYWdlIiwiRm9ybSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwidmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJyZXBsYWNlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU8sQUFBUyxBQUFNOztBQUMvQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7Ozs0TixBQUNKO2VBQVEsQUFDRyxBQUNUO29CQUZNLEFBRVEsQUFDZDthQUhNLEEsQUFHQztBQUhELEFBQ04sYUFLRixBOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtBQUNBO3NCQUFBLEFBQU0sQUFDQTtBQUhHLDJCQUdRLHdCQUNmLE1BQUEsQUFBSyxNQUpFLEFBR1EsQUFDSixVQUNWLEFBRUg7OztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQVB0QixBQU9ULEFBQWMsQUFBK0I7Z0NBUHBDO2dDQUFBO3VCQVNnQixjQUFBLEFBQUssSUFUckIsQUFTZ0IsQUFBUzs7bUJBQTFCO0FBVEMsb0NBQUE7Z0NBQUE7Z0NBV0QsQUFBUyxRQUFULEFBQWlCLFdBQVcsTUFBQSxBQUFLLE1BQWpDLEFBQXVDLE9BQXZDLEFBQThDO3dCQUM1QyxTQUFBLEFBQVMsQUFDZjtBQWJLLEFBV0QsQUFBbUQ7QUFBQSxBQUN2RCxpQkFESTs7bUJBSU47K0JBQUEsQUFBTyx3QkFBc0IsTUFBQSxBQUFLLE1BZjNCLEFBZVAsQUFBd0MsVUFmakMsQUFlNEM7Ozs7OztnQ0FmNUM7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBc0JQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBdEJ2QixBQXNCUCxBQUFjLEFBQW9COzttQkFFcEM7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0F4QlAsQUF3QlQsQUFBYyxBQUFXOzttQkF4QmhCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBMkJGO21CQUNQOzs2QkFDRSxBQUFDO2tCQUNXLEtBRFosQUFDaUIsQUFDZjtlQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFGaEIsQUFFc0I7O29CQUZ0QjtzQkFBQSxBQUlFO0FBSkY7QUFDRSxPQURGLGtCQUlHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sS0FBTCxBQUFTO29CQUFUO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSxnREFBQSxBQUFDO2VBQUQsQUFDUSxBQUNOO3VCQUZGLEFBRWdCLEFBQ2Q7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUp6RDs7b0JBQUE7c0JBUEosQUFJRSxBQUdFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLEFBQUM7ZUFBRCxBQUVFO2dCQUZGLEFBRVMsQUFDUDtpQkFBUyxLQUFBLEFBQUssTUFIaEIsQUFHc0I7O29CQUh0QjtzQkFkRixBQWNFLEFBS0E7QUFMQTtBQUNFLDBCQUlGLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7b0JBQXRDO3NCQUFBO0FBQUE7U0FwQkosQUFDRSxBQW1CRSxBQUtMOzs7OztBQTVEMEIsQSxBQThEN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiRjovRXRoZXJldW0mU29saWRpdHkvRnVuZCBJTiJ9