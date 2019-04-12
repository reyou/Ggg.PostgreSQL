import { Client } from "pg";

async function main() {
  let config = {
    user: "me",
    host: "localhost",
    database: "api",
    password: "password",
    port: 5432
  };
  const client = new Client(config);
  try {
    await client.connect();

    const res = await client.query("SELECT $1::text as message", [
      "Hello world!"
    ]);
    console.log(res.rows[0].message); // Hello world!
    await client.end();
  } catch (ex) {
    console.log(ex);
    debugger;
  }
}

main();
