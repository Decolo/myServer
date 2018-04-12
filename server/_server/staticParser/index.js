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
var fs = require("fs");
var path = require("path");
var mime = require("mime");
var staticParser = function (context) {
    return new Promise(function (resolve, reject) {
        var req = context.req, resCtx = context.resCtx;
        var url = req.url, method = req.method;
        if (url === '/')
            url = '/index.html';
        var staticPath = path.resolve(process.cwd(), 'dist', "." + url);
        if (url.match(/\.*[a-z]$/) && !url.match(/\/action/) && method === 'GET') {
            resCtx.headers = __assign({}, resCtx.headers, { 'Content-Type': mime.getType(staticPath) });
            fs.readFile(staticPath, function (error, content) {
                if (error) {
                    resCtx.body = "Error " + error.stack;
                }
                else {
                    resCtx.statusMessage = 'Ok';
                    resCtx.statusCode = 200;
                    resCtx.body = content;
                }
                resolve();
            });
        }
        else {
            resolve();
        }
    });
};
exports.default = staticParser;
//# sourceMappingURL=index.js.map