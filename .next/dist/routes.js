'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVUsQUFBaEI7O0FBRUEsT0FBTyxBQUFQLElBQVcsQUFBWCxrQkFBNEIsQUFBNUIsa0JBR0MsQUFIRCxJQUdLLEFBSEwsdUJBRzJCLEFBSDNCLG1CQUtDLEFBTEQsSUFLSyxBQUxMLGdDQUtvQyxBQUxwQyw2QkFNQyxBQU5ELElBTUssQUFOTCxvQ0FNd0MsQUFOeEM7O0FBUUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJGOi9FdGhlcmV1bSZTb2xpZGl0eS9GdW5kIElOIn0=