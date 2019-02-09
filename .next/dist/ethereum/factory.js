'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xACF4F85B92DE48Bed4f6062a8393711839e602A4'
// '0x3eB9e7b9A0B311A33de7F7320bbBC0eD23597F70'
// '0x52451534EDD8B336810798F527cF84326303C526'
// '0x04162e9F0479ec6d4E92698a3cc9390B33d3aB03'
// '0xB57D6A740151a4A22ce162B115aAaDaB415c38d9'
// '0x3794C29868a00F665Acef568c08aff9900C8df4C'
);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFxQjs7Ozs7O0FBRzVCLElBQU0sZUFBZ0IsY0FBQSxBQUFLLElBQVQsQUFBYSxTQUM3QixLQUFBLEFBQUssTUFBTSwwQkFESyxBQUNoQixBQUEyQixZQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkYsQUFBa0IsQUFPaEIsQUFHRjtBQVZrQjs7a0JBVWxCLEFBQWUiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJGOi9FdGhlcmV1bSZTb2xpZGl0eS9GdW5kIElOIn0=