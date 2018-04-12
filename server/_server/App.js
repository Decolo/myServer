"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var App = (function () {
    function App() {
        this.parserChain = [];
        this.middleWareChain = Promise.resolve();
    }
    App.prototype.use = function (parser) {
        return this.parserChain.push(parser);
    };
    App.prototype.compositeMiddleWare = function (context) {
        var _loop_1 = function (parser) {
            this_1.middleWareChain = this_1.middleWareChain.then(function () {
                return parser(context);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.parserChain; _i < _a.length; _i++) {
            var parser = _a[_i];
            _loop_1(parser);
        }
        return this.middleWareChain;
    };
    App.prototype.initServer = function () {
        var _this = this;
        return function (request, response) {
            var context = {
                req: request,
                reqCtx: {
                    body: '',
                    query: {}
                },
                res: response,
                resCtx: {
                    statusMessage: 'not found',
                    statusCode: 404,
                    headers: {},
                    body: ''
                }
            };
            _this.compositeMiddleWare(context).then(function () {
                var _a = context.resCtx, body = _a.body, statusCode = _a.statusCode, statusMessage = _a.statusMessage, headers = _a.headers;
                console.log(response);
                response.writeHead(statusCode, statusMessage, __assign({}, headers, { 'X-powered-by': 'Node.js', 'Access-Control-Allow-Origin': 'http://localhost:8080', 'Access-Control-Allow-Credentials': true }));
                response.end(body);
            });
        };
    };
    return App;
}());
exports.default = new App();
//# sourceMappingURL=App.js.map