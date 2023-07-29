const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://demo_gun:su9neqrm@cluster0.u1yw0dd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// const del = async ()=>{
//   try {

//   } catch (error) {
//     console.log(Error)
//   }finally {
//     await client.close();
//   }
// }

// del();

const find = async () => {
  try {
    const databasesList = await client.db().admin().listDatabases();
    const databases = databasesList.databases;
    console.log("Available databases:");
    databases.forEach((db) => {
      console.log(db.name);
    });
  } catch (error) {
    console.log(Error);
  } finally {
    await client.close();
  }
};

find();
