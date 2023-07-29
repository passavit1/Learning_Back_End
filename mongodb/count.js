/*

index : 

- countDocuments(filter?, options?) - if filter doesn't match return total
- estimatedDocumentCount(options?) - faster , but less accurate


*/

const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://demo_gun:su9neqrm@cluster0.u1yw0dd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

const count = async () => {
  try {
    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const filter = {};
    const options = { hint: "_id_" }; // help count faster

    const result = await collection.countDocuments(filter, options);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

count();

const find = async () => {
  try {
    let arr = [];

    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const filter = {};
    const option = { projection: { _id: 0 } };

    const query = collection.find(filter, option);

    for await (const doc of query) {
      arr.push(doc);
    }

    console.log(arr);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

// find();
