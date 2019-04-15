import { Pool } from "pg";
let config = {
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432
};
const pool = new Pool(config);
// This is the preferred way to query with node-postgres if you can as it removes the risk of leaking a client.
async function main() {
  try {
    let response1 = await pool.query("SELECT * FROM users");
    console.log("response1:", JSON.stringify(response1, null, 4));
    console.log("\n");
    let response2 = await pool.query("SELECT * FROM users WHERE id = $1", [
      response1.rows[0].id
    ]);
    console.log("response2:", JSON.stringify(response2, null, 4));
    debugger;
  } catch (ex) {
    debugger;
    throw ex;
  }
}

main();
