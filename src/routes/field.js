"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldRoute = void 0;
const express_1 = require("express");
const field_1 = require("../controller/field");
exports.fieldRoute = (0, express_1.Router)();
exports.fieldRoute.get('/field', field_1.getFields);
exports.fieldRoute.post('/field', field_1.postField);
exports.fieldRoute.delete('/field/:fieldID', field_1.deleteField);
exports.fieldRoute.get('/field/:fieldID', field_1.getSingleField);
exports.fieldRoute.put('/field/:fieldID', field_1.updateField);
exports.default = exports.fieldRoute;
