import read from "./reader";
import json from "./parser";

// const { read } = require("./reader");
// const { json } = require("./parser");
// class GameSavingLoader {
export default class GameSavingLoader {
    load() {
        return read().then(value => json(value))
    }
}

// module.exports = {
//     GameSavingLoader
// }