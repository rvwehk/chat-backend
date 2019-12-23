"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    pseudo: String,
    telephone: String,
});
//# sourceMappingURL=user.schema.js.map