const { MongoClient, ServerApiVersion } = require("mongodb");
const url =
  "mongodb+srv://demo_gun:su9neqrm@cluster0.u1yw0dd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

const deleted = async () => {
  try {
    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const query = { name: "test2" };

    const result = await collection.deleteMany(query);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

// deleted();

const find = async () => {
  try {
    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const query = {};
    const options = { projection: { _id: 0 } };

    const result = collection.find(query, options);

    let arr = [];

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

// find();

const create = async () => {
  try {
    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const doc = [
      { name: "hello world", age: 36, number: "017-1823787" },
      { name: "hello cup", age: 24, number: "017-2136783" },
      { name: "hello grass", age: 57, number: "062-1823768" },
      { name: "hello blue", age: 33, number: "035-1823792" },
    ];

    const result = await collection.insertMany(doc);

    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

// create();

const update = async () => {
  try {
    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const filter = { name: { $regex: "hello" } };
    const replacement = { number: 1234 };

    const result = await collection.updateMany(filter, { $set: replacement });
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

// update();

const replace = async () => {
  try {
    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const filter = { name: { $regex: "hello" } };
    const replacement = { purpose: "delete" };

    const result = await collection.replaceOne(filter, replacement);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

// replace();

find();
