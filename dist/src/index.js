"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app/app"));
const admin_reoutes_1 = __importDefault(require("./app/routes/admin.reoutes"));
const user_routes_1 = __importDefault(require("./app/routes/user.routes"));
app_1.default.use('/', user_routes_1.default);
app_1.default.use('/admin', admin_reoutes_1.default);
app_1.default.listen(3000, () => {
    console.log('Server Status is OK');
});
