import { Client } from "ts-postgres";

async function main() {
  try {
    const client = new Client();
    await client.connect();

    const stream = client.query(`SELECT 'Hello ' || $1 || '!' AS message`, [
      "world"
    ]);

    for await (const row of stream) {
      console.log(row.get("message")); // 'Hello world!'
    }

    await client.end();
  } catch (ex) {
    console.log(ex);
  }
}

main();
