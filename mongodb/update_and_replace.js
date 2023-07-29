/*

index :

- updateOne() - updateOne(filter, updateDoc, options);
- findOneAndUpdate()
- updateMany() - updateMany(filter, update, options);
- replaceOne() - replaceOne(filter, replacement, options?) *** replace all doc 
- findOneAndReplace()


options ; 

upsert - true then create new doc when no match 
$regex - match only start with. *** only string     


*/

const { MongoClient, ObjectId } = require("mongodb");
const url =
  "mongodb+srv://demo_gun:su9neqrm@cluster0.u1yw0dd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

const replace_one = async () => {
  try {
    const database = client.db("Tester_DB");
    const collection = database.collection("wizat");

    const query = { number: { $regex: "0" } };
    const replacement = {
      love: 100,
    };

    const result = await collection.replaceOne(query, replacement);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

// replace_one();

const updateMany = async () => {
  try {
    const document = client.db("Tester_DB");
    const collection = document.collection("wizat");

    const filter = { age: { $gte: 2 } };
    const update = {
      $set: {
        love: { $subtract: [100, "$age"] },
      },
    };

    const result = await collection.updateMany(filter, update);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

// updateMany();

const updateOne = async () => {
  try {
    const database = client.db("Tester_DB");
    const collection = database.collection("wizat");

    const filter = { _id: new ObjectId("64c4a321be4ceebaec507850") };
    const options = {};
    const update = {
      $set: {
        name: "Passavit Maicharoen",
        age: 29,
        number: "088-2602142",
      },
    };

    const result = await collection.updateOne(filter, update, options);

    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

// updateOne();

const find = async () => {
  let result = [];
  try {
    const database = client.db("Tester_DB");
    const collection = database.collection("wizat");

    const query = {};
    const option = { projection: { _id: 0 } };

    const find = collection.find(query, option);

    for await (const doc of find) {
      result.push(doc);
    }

    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

// find();
