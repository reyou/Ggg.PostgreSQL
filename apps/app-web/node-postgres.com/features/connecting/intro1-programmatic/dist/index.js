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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let config = {
            user: "me",
            host: "localhost",
            database: "api",
            password: "password",
            port: 5432
        };
        try {
            const pool = new pg_1.Pool(config);
            let res = yield pool.query("SELECT $1::text as message", ["Hello world!"]);
            console.log(res.rows[0].message); // Hello world!
            yield pool.end();
            // clients will also use environment variables
            // for connection information
            const client = new pg_1.Client(config);
            yield client.connect();
            res = yield client.query("SELECT NOW()");
            console.log(JSON.stringify(res));
            yield client.end();
            debugger;
        }
        catch (ex) {
            console.log(ex);
            debugger;
        }
    });
}
main();
//# sourceMappingURL=index.js.map