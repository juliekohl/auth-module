"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var App = (function () {
    function App() {
        this.server = (0, express_1.default)();
        this.middleware();
    }
    App.prototype.middleware = function () {
        this.server.use(express_1.default.json());
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map