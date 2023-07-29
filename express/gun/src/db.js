const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://demo_gun:su9neqrm@cluster0.u1yw0dd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

const test = async () => {
  try {
    let arr = [];
    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const filter = {};
    const option = { projection: { _id: 0 } };

    const result = collection.find(filter, option);

    for await (const doc of result) {
      arr.push(doc);
    }

    console.log(arr);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

test();
