import { Client, Pool } from "pg";

async function main() {
  let config = {
    user: "me",
    host: "localhost",
    database: "api",
    password: "password",
    port: 5432
  };

  try {
    const pool = new Pool(config);

    let res = await pool.query("SELECT $1::text as message", ["Hello world!"]);
    console.log(res.rows[0].message); // Hello world!
    await pool.end();
    // clients will also use environment variables
    // for connection information
    const client = new Client(config);
    await client.connect();

    res = await client.query("SELECT NOW()");
    console.log(JSON.stringify(res));
    await client.end();
    debugger;
  } catch (ex) {
    console.log(ex);
    debugger;
  }
}

main();
