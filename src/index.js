"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chatbot_1 = __importDefault(require("./v1/routes/ai/chatbot"));
var pytojs_1 = __importDefault(require("./v1/routes/ai/pytojs"));
var gists_1 = __importDefault(require("./v1/routes/code/gists"));
var prettie_1 = __importDefault(require("./v1/routes/code/prettie"));
var snippet_1 = __importDefault(require("./v1/routes/code/snippet"));
var stackoverflow_1 = __importDefault(require("./v1/routes/code/stackoverflow"));
var tabnine_1 = __importDefault(require("./v1/routes/code/tabnine"));
var image_1 = __importDefault(require("./v1/routes/reads/image"));
var isvirus_1 = __importDefault(require("./v1/routes/reads/isvirus"));
var qrData_1 = __importDefault(require("./v1/routes/reads/qrData"));
var textToSpeech_1 = __importDefault(require("./v1/routes/reads/textToSpeech"));
var anime_1 = __importDefault(require("./v1/routes/search/anime"));
var game_1 = __importDefault(require("./v1/routes/search/game"));
var lyrics_1 = __importDefault(require("./v1/routes/search/lyrics"));
var question_1 = __importDefault(require("./v1/routes/search/question"));
var weather_1 = __importDefault(require("./v1/routes/search/weather"));
var wiki_1 = __importDefault(require("./v1/routes/search/wiki"));
var ytpl_1 = __importDefault(require("./v1/routes/search/ytpl"));
var tsCompiler_1 = __importDefault(require("./v1/routes/write/tsCompiler"));
var xml2json_1 = __importDefault(require("./v1/routes/write/xml2json"));
var createBin_1 = __importDefault(require("./v1/routes/write/createBin"));
var deleteBin_1 = __importDefault(require("./v1/routes/write/deleteBin"));
var getBin_1 = __importDefault(require("./v1/routes/write/getBin"));
var searchBins_1 = __importDefault(require("./v1/routes/write/searchBins"));
module.exports.default = {
    v1: {
        ai: {
            chatbot: chatbot_1.default,
            py2js: pytojs_1.default
        },
        code: {
            githubGists: gists_1.default,
            prettie: prettie_1.default,
            snippet: snippet_1.default,
            stackoverflow: stackoverflow_1.default,
            tabnine: tabnine_1.default
        },
        reads: {
            image: image_1.default,
            isVirus: isvirus_1.default,
            qrData: qrData_1.default,
            tts: textToSpeech_1.default
        },
        search: {
            anime: anime_1.default,
            game: game_1.default,
            lyrics: lyrics_1.default,
            question: question_1.default,
            weather: weather_1.default,
            wiki: wiki_1.default,
            ytpl: ytpl_1.default
        },
        write: {
            tsCompiler: tsCompiler_1.default,
            xml2json: xml2json_1.default,
            bins: {
                create: createBin_1.default,
                Delete: deleteBin_1.default,
                get: getBin_1.default,
                search: searchBins_1.default
            }
        }
    }
};
