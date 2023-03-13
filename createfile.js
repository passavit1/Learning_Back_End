var fs = require("fs");

// fs.appendFile(
//   "log.txt",
//   "Hello World\nMy Name is Passavit Maicharoen\n",
//   function (err) {
//     if (err) throw err;
//     console.log("Updated!");
//   }
// );

// fs.open("mynewfile2.txt", "w", function (err, fd) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// fs.writeFile("log.txt", "Hello gun\n", function (err) {
//   if (err) throw err;
//   console.log("replace!");
// });

// fs.unlink("log.txt", function (err) {
//   if (err) throw err;
//   console.log("Deleted!");
// });

fs.rename("log.txt", "log2.txt", function (err) {
  if (err) throw err;
  console.log("updated file name");
});
