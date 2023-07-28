/*

index :

- insertOne();
- insertMany();


*/

const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://demo_gun:su9neqrm@cluster0.u1yw0dd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

// insertMany

const insertMany = async () => {
  try {
    const database = client.db("Tester_DB");
    const collection = database.collection("wizat_many");

    const docs = [
      { product: "apple", price: 10 },
      { product: "banana", price: 20 },
      { product: "orange", price: 30 },
      { product: "mango", price: 40 },
    ];

    const options = { ordered: true };

    const result = await collection.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

insertMany();

// insertOne;

// const insertOne = async () => {
//   try {
//     const database = client.db("Tester_DB");
//     const collection = database.collection("wizat");

//     const doc = {
//       name: "Passsavit Maicharoen",
//       age: 29,
//       number: "088-2602142",
//     };

//     const result = await collection.insertOne(doc);
//     console.log(`Successfully inserted with the _id: ${result.insertedId}`);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await client.close();
//   }
// };

// insertOne();
