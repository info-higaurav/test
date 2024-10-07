"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminRoutes = (0, express_1.Router)();
adminRoutes.get('/', (req, res) => {
    res.status(200).json({ message: "Working fine admin routes" });
});
exports.default = adminRoutes;
