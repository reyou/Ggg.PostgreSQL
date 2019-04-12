import { Pool } from "pg";
let config = {
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432
};
const pool = new Pool(config);
// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});
// callback - checkout a client
pool.connect(async (err, client, done) => {
  if (err) {
    throw err;
  }
  try {
    let res = await client.query("SELECT * FROM users WHERE id = $1", [2]);
    done();
    console.log(res.rows[0]);
    debugger;
  } catch (err) {
    console.log(err.stack);
  }
});
