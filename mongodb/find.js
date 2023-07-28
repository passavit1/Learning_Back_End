/*
index : 

- findOne() - findOne(filter, options):
- find() - find(filter, options); 


option : 

sort : 1 for ascending, -1 for descending
projection : Specifies which fields to include or exclude  (0 for exclusive , 1 for includes)
limit : limit the result set. Ex. { limit : 10 }
skip : Skips the first n documents. Ex. { skip : 10 }  used with limit like { skip : 5 , limit : 10}
collation : 


Operators:

$gt: >
$lt : <
$lte: <= 
$gte: >=
$eq: ===
$ne: !===

*/

const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://demo_gun:su9neqrm@cluster0.u1yw0dd.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

// find()

const find = async () => {
  try {
    const database = client.db("sample_analytics");
    const collection = database.collection("accounts");

    const query = { products: "InvestmentStock", account_id: { $gt: 500000 } };
    const option = {
      sort: { account_id: 1 },
      projection: { _id: 0, limit: 0 },
      limit: 10,
    };

    const result = collection.find(query, option);

    if ((await collection.countDocuments(query)) == 0) {
      console.log("No documents found");
    }

    for await (const doc of result) {
      console.log(doc);
    }
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

find();

// findOne()

// const find_one = async () => {
//   try {
//     const database = client.db("sample_training");
//     const collection = database.collection("grades");

//     const query = { class_id: 270 };

//     const options = {
//       sort: { class_id: 1 },
//       projection: { class_id: 0, _id: 0, student_id: 0 },
//     };

//     const result = await collection.findOne(query, options);
//     console.log(result);
//     console.log(result.scores[0].type);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await client.close();
//   }
// };

// find_one();
