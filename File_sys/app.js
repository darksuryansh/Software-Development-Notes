// 1. File System Module
const fs = require('fs');


// async read file

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

fs.writeFile('output.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File has been written');
}   );




fs.appendFile('output.txt', '\n add this to output file', (err) =>{
    if (err) throw err;

});
 


// strem for big file 
// pipe to copy  large file

const readfile = fs.createReadStream('input.txt');
const writefile = fs.createWriteStream('output.txt');


readfile.pipe(writefile);


console.log("hiiiiiiiiiiii");


// sync read file

fs.readFileSync('input.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("read sync file" );
});


console.log("hiiiiiiiiiiii");
