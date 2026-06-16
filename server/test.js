const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://ayurvision:ayur12345@cluster0.p2xslml.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ Connection Error:");
    console.error(err);
  } finally {
    await client.close();
  }
}

run();