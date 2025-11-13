const fs = require("fs");
const superagent = require("superagent");
const readFileName = file => {
    return new Promise((resolve, reject) => {
      const data1 = fs.readFile(file, 'utf-8', (err, data) => {
        resolve(data);
        if(err) reject(err);
      })
return data1;
    })
}

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        const data2 = fs.writeFile(file,`${data}`,'utf-8', (err, data) => {
            resolve(data);

            if(err) reject(err);
        })
        return data2;
    })
}

readFileName(`${__dirname}/dog-img.txt`).then(data => {
    writeFilePro(`${__dirname}/../../txt/dot.txt`, `${data}`, 'utf-8').then(data => {
        console.log("the data has been written");
    })
})

readFileName(`${__dirname}/dog.txt`).then(data => {
   superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(res => {
  writeFilePro(`${__dirname}/../../txt/dot2.txt`, `${data}`, 'utf-8').then(data => {
        console.log("the data has been written");
    })
   }).catch(err => {
    console.log(`the file data was wrongly manupilated ${err}`);
   })
})



const getMulData = async() => {
    console.log('promises chain started.....');
    try {
        const data = await readFileName(`${__dirname}/dog.txt`);
        const res1Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res2Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const res3Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        const data1 = await Promise.all([res1Pro, res2Pro, res3Pro]);
        const fileData = data1.map(data => data.body.message);
        await writeFilePro(`${__dirname}/../../txt/PromisesChain.txt`, `${fileData}`, 'utf-8');
    } catch(err) {
        console.log(err);
    }
}

getMulData();