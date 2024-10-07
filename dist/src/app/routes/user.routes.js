"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes = express_1.default.Router();
userRoutes.get('/', (req, res) => {
    res.status(200).json({ message: "User Routes working fine" });
});
exports.default = userRoutes;
