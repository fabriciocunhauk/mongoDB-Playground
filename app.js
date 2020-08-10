const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const url =
  "mongodb://localhost:27017";

const client = new MongoClient(url, { useUnifiedTopology: true });

const dbName = 'fruitsDB';

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");

    const database = client.db(dbName);
    const collection = database.collection("fruits");
    // create a document to be inserted

    const result = await collection.insertMany([
      {
        name: "Apple",
        score: 8,
        review: "Great fruit"
      },
      {
        name: "Orange",
        score: 6,
        review: "Kinda sour"
      },
      {
        name: "Banana",
        score: 9,
        review: "Great stuff!"
      }

    ]);

    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

