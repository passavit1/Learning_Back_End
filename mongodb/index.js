const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://demo_gun:su9neqrm@cluster0.u1yw0dd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

const run = async () => {
  try {
    const database = client.db("sample_mflix");
    const collection = database.collection("movies");
    const query = { runtime: { $lt: 15 } };
    const option = {
      sort: { title: 1 },
      projection: { _id: 0, title: 1, imbd: 1 },
    };
    const cursor = collection.find(query, option);

    if ((await collection.countDocuments(query)) === 0) {
      console.log("no documents found");
    }

    for await (const doc of cursor) {
      console.log(doc);
    }
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};

run();
