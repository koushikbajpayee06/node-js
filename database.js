const { MongoClient } = require("mongodb")

const url = "mongodb+srv://namastedev:fsmtGY1IfU6h4Ypp@namastenode.uwpmhgp.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main(){
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return "done";
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());



  // NOTES

  // Go to mongoDB website
  // Create a free M0 Cluster
  // Create a User
  // Get the connection String
  // Install MongoDB Compass