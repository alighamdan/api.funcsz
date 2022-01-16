"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
function chatbot(message) {
    if (!message)
        throw Error("Please Provide A Message for ai Chatbot");
    return new Promise(function (resolve, reject) {
        axios_1.default
            .get("https://apii.funcsz.tk/api/v1/ai/chatbot?message=" + encodeURI(message))
            .then(function (_a) {
            var msg = _a.data.message;
            return resolve(msg);
        })
            .catch(reject);
    });
}
module.exports.default =chatbot;
