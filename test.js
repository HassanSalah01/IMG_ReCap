// const fs = require("fs-extra");

// async function exampleMode(directory) {
//     try {
//         await fs.ensureDir(directory, 1);
//     } catch (err) {
//         console.log(err);
//     }
// }
// exampleMode();

/* eslint-disable @typescript-eslint/no-unused-vars */

// const fs = require("fs");

// const foo2 = (x) => {
//     return x;
// };

// let fin;
// async function listDir(s) {
//     try {
//         //
//         let namess = await fs.promises.readdir(__dirname + "/tests");
//         let fin = namess.filter((na) => {
//             return na == s;
//         });
//         if (fin.length >= 1) {
//             console.log("tueeeeeeeeee");
//             return true;
//         }
//         console.log(fin);
//     } catch (err) {
//         console.error("Error occurred while reading directory!", err);
//     }
// }

// const testFolder = "./tests/";
// const fs = require("fs");
// console.log("start");
// const foo = async () => {
//     let name;
//     try {
//         name = fs.promises.readdir(testFolder);
//     } catch (error) {
//         console.log(error.message);
//     }
//     console.log(name);
// };
// foo();
// console.log("end");

// p
// "prettier/prettier": [
//         "error",
//         {
//             "singleQuote": true,
//             "parser": "flow"
//         }
//     ]
