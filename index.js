// console.log('hello');
// let joke=require('give-me-a-joke')

// joke.getRandomDadJoke((data)=>{
//     console.log(data);

// })

// const { log } = require('console')
// let fs=   require('fs')
// fs.writeFileSync('index.html','<h1> hee </h1>');
// fs.renameSync('index.html','index.htm')
// fs.writeFileSync('read.txt','hello data ')
// fs.appendFileSync('read.txt','  new updateeee!!!!')
// fs.unlinkSync('read.txt')
// let data=fs.readFileSync('read.txt')
// console.log(data.toString());
// fs.writeFile('read.txt','hello',(errr)=>{
//     console.log('filee ipdateddd');

// })
// fs.readFile('read.txt',(err,data)=>{
//     if(err)throw err
//     console.log(data.toString());

// })

// const { log } = require('console');
// let fs=   require('fs');
// const { Server } = require('http');



// create
// fs.writeFileSync('fsd7.js','hello gm  nhi haiii')
// fs.writeFile('index.htm','<h2> hello new filee </h2>', (err)=>{
//     if(err) throw err
//     console.log('file create ho gyiii');

// })
// read
// fs.readFile('index.htm',(err,data)=>{
//     if(err) throw err
//     console.log(data.toString());

// })

// rename file
// fs.renameSync('fsd8.txt','fsd7.js')
// read
// let data=  fs.readFileSync('fsd8.txt')
// console.log(data.toString());

// fs.unlinkSync('read.txt')

// Server
//   let http=  require('http')
// //   console.log(http,"yaad nhi hoga");
//   let server=   http.createServer((req,res)=>{
//     // console.log('hehe');
//     res.end('')
//   })
//   server.listen(5000, ()=>{
//     console.log('server running on port no 5000');

//   })



//  const { log } = require('console');
// let fs=    require('fs')


//  fs.writeFile('new.css', 'hehehehehehe', (err)=>{ 
//     if(err)throw err 
//     console.log('file createddddddd');})

// fs.readFile('new.css',(err,data)=>{
//     if(err) throw err
//     console.log(data.toString());

// })
//  create
//  fs.writeFileSync('home.js','jhsfuywgfwueyfgweuygefyu')

// //  read

// let data=  fs.readFileSync('home.js')
// console.log(data.toString());

//  fs.unlinkSync('home.js')








let http=  require('http')
let server=   http.createServer((req,res)=>{
    res.end('hello this is server')

})
server.listen(4000, ()=>{
    console.log('server running on port no 4000');

})