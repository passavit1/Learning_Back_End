/*

index : 

- deleteOne() - deleteOne(filter?, options?)
- deleteMany() - deleteMany(filter?, options?)


*/

const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://demo_gun:su9neqrm@cluster0.u1yw0dd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

const delete_many = async () => {
  try {
    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const filter = { name: "test1", name: "test2", name: "test3" };

    const result = await collection.deleteMany(filter);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

// delete_many();

const deleteOne = async () => {
  try {
    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const filter = { name: "Tester" };
    const result = await collection.deleteOne(filter);

    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

// deleteOne();

const find = async () => {
  let arr = [];

  try {
    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const query = {};
    const option = { projection: { _id: 0 } };

    const result = collection.find(query, option);

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

find();

const create = async () => {
  try {
    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const doc = [{ name: "test1" }, { name: "test2" }, { name: "test3" }];

    const query = await collection.insertMany(doc);
    console.log(query);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

// create();
