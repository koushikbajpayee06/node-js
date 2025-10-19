const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb+srv://namastedev:1hB9abpWmTbetipq@namastenode.1duep3t.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: true,
});

async function main() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB Atlas!");
    const db = client.db("HelloWorld");
    const collection = db.collection("User");

    const count = await collection.countDocuments();
    console.log("Total documents:", count);
  } catch (err) {
    console.error("❌ Connection failed:", err);
  } finally {
    await client.close();
  }
}

main();
