const fs = require("fs");
const superagent = require("superagent");
const { reject } = require("superagent/lib/request-base");

const readFilePro = file => {
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        if(err) reject('I could not find that file');
        resolve(data);
      })
    })
}

const writeFileName = (file, data) => {
    return new Promise((resolve, reject) => {
    fs.writeFile(file, 'utf-8', (err, data) => {
        resolve(data);
        if(err) reject("wrong file path");
    })
    })
}
/*
readFilePro(`${__dirname}/dog.txt`).then(data => {
   superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(res => {
            console.log(res.body.message);
        fs.writeFile('dog-img.txt', res.body.message, 'utf-8', (err, data) => {
            console.log('file written');
        });
    }).catch (err => {
        console.log(err.message);
    })
})*/

//promises chaining

readFilePro(`${__dirname}/dog.txt`).then(data => {
    console.log(`Breed: ${data}`);
    //again a promise trigger and return the promises
  return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(res => {
    console.log(res.body.message);
        return writeFileName('dog-img.txt', res.body.message)
    })
    .then(() => {
        console.log("random dog image saved to the file");
    })
    .catch (err => {
        console.log(err.message);
    })
})

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    console.log(`Breed: ${data}`);
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(res => {
            console.log(res.body.message);
        fs.writeFile('dog-img.txt', res.body.message, 'utf-8', (err, data) => {
            console.log('file written');
        });
    }).catch (err => {
        console.log(err.message);
    })
});

