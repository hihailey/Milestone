/*
 * Project: COMP1320 Milestone 1
 * File Name: main.js
 * Description: 
 * 
 * Created Date: Nov 13
 * Author: Hailey Kim
 * 
 */

const IOhandler = require("./IOhandler"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;

  IOhandler.unzip(zipFilePath, pathUnzipped)
    .then(() => { 
      return IOhandler.readDir(pathUnzipped)
    })
IOhandler.readDir(pathUnzipped)
  .then(listOfPng=> {
      console.log("the list is" + listOfPng);
      for (let png of listOfPng) {
        IOhandler.grayScale(`${pathUnzipped}/${png}`, pathProcessed);
        // /users/haileykim/desktop/starter/unzipped/in.png
      }
  }) 
  .catch(err => console.log(err))






  /*
  
  unzip(zipFilePath, pathUnzipped)
.then((msg) => {
  console.log(msg);
  return readDir(pathUnzipped);
})
.then(list => {
  for (let png of list) {
    grayScale(`${pathUnzipped}/${png}`, pathProcessed);
  }
}) 
.catch(err => console.log(err));
*/
