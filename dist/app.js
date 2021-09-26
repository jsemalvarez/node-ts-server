"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV === 'production') {
    dotenv_1.default.config({ path: `${__dirname}/../.env.production` });
}
else if (process.env.NODE_ENV === 'test') {
    dotenv_1.default.config({ path: `${__dirname}/../.env.test` });
}
else {
    dotenv_1.default.config({ path: `${__dirname}/../.env.development` });
}
const server_1 = __importDefault(require("./models/server"));
const server = new server_1.default();
server.listen();
//# sourceMappingURL=app.js.map