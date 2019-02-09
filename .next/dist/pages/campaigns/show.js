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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require("../../ethereum/factory.js");

var _factory2 = _interopRequireDefault(_factory);

var _campaign = require("../../ethereum/campaign.js");

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require("../../components/ContributeForm");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require("../../routes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\Ethereum&Solidity\\Fund IN\\pages\\campaigns\\show.js?entry";
// import React, { Component } from "react";
// import Layout from "../../components/Layout";
// import factory from "../../ethereum/factory.js";
// import Campaign from "../../ethereum/campaign.js";
// import { Card, Grid, Button } from "semantic-ui-react";
// import web3 from "../../ethereum/web3";
// import ContributeForm from "../../components/ContributeForm";
// import { Link } from "../../routes.js";

// class CampaignShow extends Component {
//   static async getInitialProps(props) {

//     const campaign = await Campaign(props.query.address);
//     const summary = await campaign.methods.getSummary().call();

//     return {
//       address: props.query.address,
//       minimumContribution: summary[0],
//       balance: summary[1],
//       requestsCount: summary[2],
//       approversCount: summary[3],
//       manager: summary[4]
//     };
//   }

//   renderCards() {
//     const {
//       minimumContribution,
//       balance,
//       requestsCount,
//       approversCount,
//       manager
//     } = this.props;

//     const items = [
//       {
//         header: manager,
//         description:
//           "The manager created this campaign and can create requests to withdraw money",
//         meta: "Address of manager",
//         style: {
//           overflowWrap: "break-word"
//         }
//       },
//       {
//         header: minimumContribution,
//         description: "Minimum Contribution(wei)",
//         meta:
//           "You must contribute at least this much wei to become an approver",
//         style: {
//           overflowWrap: "break-word"
//         }
//       },
//       {
//         header: requestsCount,
//         description:
//           "A request tries to withdraw money from the contract. Request must be approved by approvers",
//         meta: "Number of requests",
//         style: {
//           overflowWrap: "break-word"
//         } 
//       },
//       {
//         header: approversCount,
//         description:
//           "Number of people  who have already donated to this campaign",
//         meta: "Number of approvers",
//         style: {
//           overflowWrap: "break-word"
//         } 
//       },
//       {
//         header: web3.utils.fromWei(balance, "ether"),
//         description:
//           "The balance is how much money  this campaign  has left  to spend.",
//         meta: "Campaign balance (ether)",
//         style: {
//           overflowWrap: "break-word"
//         } 
//       }
//     ];

//     return <Card.Group items={items} />;
//   }

//   render() {
//     return (
//       <Layout>
//         <h3>Show Campaign</h3>
//         <Grid>
//           <Grid.Row>
//             <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
//             <Grid.Column width={6}>
//               <ContributeForm address={this.props.address} />
//             </Grid.Column>
//           </Grid.Row>

//           <Grid.Row> 
//             <Grid.Column> 
//               <Link route={`/campaigns/${this.props.address}/requests`}>
//                 <a>
//                   <Button primary>View Requests</Button>
//                 </a>
//               </Link>
//             </Grid.Column>
//           </Grid.Row>
//         </Grid>
//       </Layout>
//     );
//   }
// }

// export default CampaignShow;

var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          minimumContribution = _props.minimumContribution,
          balance = _props.balance,
          name = _props.name,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount,
          manager = _props.manager;

      var items = [{
        header: "",
        image: "https://byuc.files.wordpress.com/2012/07/avat-2.jpg",
        // description:
        //   "The manager created this campaign and can create requests to withdraw money",
        // meta: "Address of manager",
        style: {
          overflowWrap: "break-word",
          height: "90px",
          width: "90px"
        }
      }, {
        header: name,
        description: "Reason for need of funding",
        meta: "Humanity With A Mission",
        style: {
          overflowWrap: "break-word"
        }
      }, {
        header: manager,
        description: "The manager created this campaign and can create requests to withdraw money",
        meta: "Address of manager",
        style: {
          overflowWrap: "break-word"
        }
      }, {
        header: minimumContribution,
        description: "Minimum Contribution(wei)",
        meta: "You must contribute at least this much wei to become an approver",
        style: {
          overflowWrap: "break-word"
        }
      }, {
        header: requestsCount,
        description: "A request tries to withdraw money from the contract. Request must be approved by approvers",
        meta: "Number of requests",
        style: {
          overflowWrap: "break-word"
        }
      }, {
        header: approversCount,
        description: "Number of people  who have already donated to this campaign",
        meta: "Number of approvers",
        style: {
          overflowWrap: "break-word"
        }
      }, {
        header: balance, //web3.utils.fromWei(balance, "ether"),
        description: "The balance is how much money  this campaign  has left  to spend.",
        meta: "Campaign balance (ether)",
        style: {
          overflowWrap: "break-word"
        }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, "Show Campaign"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, "View Requests")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _campaign2.default)(props.query.address);

              case 2:
                campaign = _context.sent;
                _context.next = 5;
                return campaign.methods.getSummary().call();

              case 5:
                summary = _context.sent;
                return _context.abrupt("return", {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4],
                  name: summary[5]
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJmYWN0b3J5IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwibmFtZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsImltYWdlIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJoZWlnaHQiLCJ3aWR0aCIsImRlc2NyaXB0aW9uIiwibWV0YSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0hBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFZOzs7OztBQXpIckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQWZkLEFBQ0UsQUFFRSxBQVFFLEFBQ0UsQUFDRSxBQUNFLEFBQ0UsQUFRZjs7Ozs7MkcsQUEzSDRCOzs7Ozs7O3VCQUVKLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O21CQUF0QztBOzt1QkFDZ0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7bUJBQTlDO0E7OzJCQUdLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO3VDQUFxQixRQUZoQixBQUVnQixBQUFRLEFBQzdCOzJCQUFTLFFBSEosQUFHSSxBQUFRLEFBQ2pCO2lDQUFlLFFBSlYsQUFJVSxBQUFRLEFBQ3ZCO2tDQUFnQixRQUxYLEFBS1csQUFBUSxBQUN4QjsyQkFBUyxRQU5KLEFBTUksQUFBUSxBQUNqQjt3QkFBTSxRQVBELEFBT0MsQUFBUSxBO0FBUFQsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBxQixBLEFBK0gzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkY6L0V0aGVyZXVtJlNvbGlkaXR5L0Z1bmQgSU4ifQ==