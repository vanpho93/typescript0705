"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
exports.app = express_1.default();
exports.app.get('/cong/:a/:b', function (req, res) {
    var _a = req.params, a = _a.a, b = _a.b;
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send({ success: false, message: 'INVALID_NUMBER_INPUT' });
    }
    res.send({ success: true, result: +a + +b });
});
exports.app.listen(3000, function () { return console.log('Server started.'); });
