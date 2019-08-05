"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var message_util_1 = require("@wisekingdom/message-util");
var about_1 = require("@wisekingdom/message-util/lib/about");
var express_1 = __importDefault(require("express"));
var port = process.env.PORT || 3030;
var app = express_1.default();
app.use('*', function (req, res) {
    var name = req.query.name || 'Human';
    res.json({
        version: about_1.version(),
        message: message_util_1.sayHi(name)
    });
});
app.listen(port, function () {
    console.log(" > Ready http://localhost:" + port);
});
