"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var App_1 = require("./App");
var index_1 = require("./staticParser/index");
var index_2 = require("./apiParser/index");
var index_3 = require("./methodParser/index");
App_1.default.use(index_3.default);
App_1.default.use(index_1.default);
App_1.default.use(index_2.default);
var PORT = process.env.PORT || 7001;
var server = http.createServer(App_1.default.initServer()).listen(PORT, function () {
    console.log("A server is started on PORT " + PORT);
});
//# sourceMappingURL=index.js.map