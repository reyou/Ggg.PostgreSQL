"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
let config = {
    user: "me",
    host: "localhost",
    database: "api",
    password: "password",
    port: 5432
};
const pool = new pg_1.Pool(config);
// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on("error", (err, client) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});
// callback - checkout a client
pool.connect((err, client, done) => __awaiter(this, void 0, void 0, function* () {
    if (err) {
        throw err;
    }
    try {
        let res = yield client.query("SELECT * FROM users WHERE id = $1", [2]);
        done();
        console.log(res.rows[0]);
        debugger;
    }
    catch (err) {
        console.log(err.stack);
    }
}));
//# sourceMappingURL=index.js.map