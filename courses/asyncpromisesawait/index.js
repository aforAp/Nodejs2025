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

const getDogPic = async () => {
    try{

        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`Breed : ${data}`);
        const res1Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res2Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res3Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        
        const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
        const imgs = all.map(el => el.body.message);
        console.log(imgs);
        console.log(all);
    
        await writeFileName('dog-img.txt',"utf-8", imgs.join('\n'));
        console.log("random dog image saved to the file");
    } catch (err) {
        console.log("Error");
        throw(err);
    }
    return '2 :Ready';
}

(async () => {
   try {
console.log("1.Will get dog pics");
const x = await getDogPic();
console.log(x);
   } catch(err) {
    console.log(err);
   }
})();
/*
console.log("1.Will get dog pics");
getDogPic().then(x => {
    console.log(x);
console.log("2. Done getting dog pics");
}).catch(err => {
    console.log(err);
});

*/
//promises chaining
/*
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

*/