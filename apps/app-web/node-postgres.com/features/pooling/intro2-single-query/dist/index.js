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
// This is the preferred way to query with node-postgres if you can as it removes the risk of leaking a client.
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response1 = yield pool.query("SELECT * FROM users");
            console.log("response1:", JSON.stringify(response1, null, 4));
            console.log("\n");
            let response2 = yield pool.query("SELECT * FROM users WHERE id = $1", [
                response1.rows[0].id
            ]);
            console.log("response2:", JSON.stringify(response2, null, 4));
            debugger;
        }
        catch (ex) {
            debugger;
            throw ex;
        }
    });
}
main();
//# sourceMappingURL=index.js.map