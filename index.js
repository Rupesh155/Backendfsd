// // console.log('hello');
// // let joke=require('give-me-a-joke')

// // joke.getRandomDadJoke((data)=>{
// //     console.log(data);

// // })

// // const { log } = require('console')
// // let fs=   require('fs')
// // fs.writeFileSync('index.html','<h1> hee </h1>');
// // fs.renameSync('index.html','index.htm')
// // fs.writeFileSync('read.txt','hello data ')
// // fs.appendFileSync('read.txt','  new updateeee!!!!')
// // fs.unlinkSync('read.txt')
// // let data=fs.readFileSync('read.txt')
// // console.log(data.toString());
// // fs.writeFile('read.txt','hello',(errr)=>{
// //     console.log('filee ipdateddd');

// // })
// // fs.readFile('read.txt',(err,data)=>{
// //     if(err)throw err
// //     console.log(data.toString());

// // })

// // const { log } = require('console');
// // let fs=   require('fs');
// // const { Server } = require('http');



// // create
// // fs.writeFileSync('fsd7.js','hello gm  nhi haiii')
// // fs.writeFile('index.htm','<h2> hello new filee </h2>', (err)=>{
// //     if(err) throw err
// //     console.log('file create ho gyiii');

// // })
// // read
// // fs.readFile('index.htm',(err,data)=>{
// //     if(err) throw err
// //     console.log(data.toString());

// // })

// // rename file
// // fs.renameSync('fsd8.txt','fsd7.js')
// // read
// // let data=  fs.readFileSync('fsd8.txt')
// // console.log(data.toString());

// // fs.unlinkSync('read.txt')

// // Server
// //   let http=  require('http')
// // //   console.log(http,"yaad nhi hoga");
// //   let server=   http.createServer((req,res)=>{
// //     // console.log('hehe');
// //     res.end('')
// //   })
// //   server.listen(5000, ()=>{
// //     console.log('server running on port no 5000');

// //   })



// //  const { log } = require('console');
// // let fs=    require('fs')


// //  fs.writeFile('new.css', 'hehehehehehe', (err)=>{ 
// //     if(err)throw err 
// //     console.log('file createddddddd');})

// // fs.readFile('new.css',(err,data)=>{
// //     if(err) throw err
// //     console.log(data.toString());

// // })
// //  create
// //  fs.writeFileSync('home.js','jhsfuywgfwueyfgweuygefyu')

// // //  read

// // let data=  fs.readFileSync('home.js')
// // console.log(data.toString());

// //  fs.unlinkSync('home.js')

// // let http=  require('http')
// // let server=   http.createServer((req,res)=>{
// //     res.end('hello this is server')
// // })
// // server.listen(4000, ()=>{
// //     console.log('server running on port no 4000');

// // })

// // let express=  require('express')

// // let app=   express()
// // console.log(app,'hehe');
// // app.use((req,res)=>{
// //     res.send('hello this is serverrr!!!')

// // })


// // routing

// // app.get('/', (req,res)=>{
// //     res.send('<h2>  hello  </h2>')

// // })
// // app.get('/cat', (req,res)=>{
// //     res.send('Meoww   drfkjgerifg7rw8ifygyrwo8fyh8orwr   4t5yt45tMeoww')
// // })
// // app.get('/new', (req,res)=>{
// //     res.send('olddderkfuheriufheriufgheriurghd!!!')

// // })
// // app.get('*',(req,res)=>{
// //     res.send('kuch bhij mtlb ')

// // })

// // app.listen(4000,()=>{
// //     console.log('server running on port no 4000');

// // })







      
               

     
// // server 


// let express=  require('express')
//   let app=   express()

// //   app.use((req,res)=>{
// //     res.send('hello')

// //   })
// // routing

// // app.get('/',(req,res)=>{
// //     res.send('hello') })
// // app.get('/cat',(req,res)=>{
// //     res.send('Meow Meoww')

// // })
// // app.get('*',(req,res)=>{
// //     res.send('pa found')

// // })
// // npm i ejs

// app.set('view engine', 'ejs')

// app.get('/',(req,res)=>{
//   res.render('index')

// })
//   app.listen(4000,()=>{
//     console.log('server running on port no 4000');

//   })


// //   let express=  require('express')
// //  let app=    express()

// //  app.get('/', (req,res)=>{
// //   res.send('hello')

// //  })
// //  app.get('/:r/:a', (req,res)=>{
// // let {r,a}=req.params
// //   res.send(`${r} and  ${a}`)

// //  })

// // app.get('/search',(req,res)=>{
// //   console.log('hehe');
// //   console.log(req.query);
// //   let {firstName,lastName}=req.query
// //   res.send(` ${firstName}   ${lastName}`)
// // })

// // http://localhost:5000/search?firstName=Rahul&lastName=Kumar

// //  app.listen(5000,()=>{
// //   console.log('server running ');
// //  })



// let express=  require('express')
// let mongoose=   require('mongoose')
// let app=  express()
// let User=   require('./models/model')
// app.use(express.json())
// let bcrypt=    require('bcrypt')
// app.use(express.urlencoded({ extended: true }));
// mongoose.connect('mongodb://127.0.0.1:27017/auth').then(()=>{
//   console.log('db conn...');
// }).catch(()=>{
//   console.log('err');
// })

// app.post('/signup', async(req,res)=>{
//   let user=req.body
//   console.log(user,"rr")
//   // res.send(user)
//   let Email=  await  User.findOne({email:user.email})
//   if(Email){
//       res.send('user jinda aiii ')
//   }
//   else{
//       // res.send('hehe')
//    user.passWord=  await bcrypt.hash(user.passWord, 10)
//   console.log(user,"rrrr")
//   let dbUser=  new User({
//       firstName:user.firstName,
//       lastName:user.lastName,
//       email:user.email,
//       passWord:user.passWord

//   })
//   // console.log(user,"rrrr");
// await  dbUser.save()

// res.send('user created  ')

        
//   }

// })




// app.post('/login',async(req,res)=>{
//   let userInfo=req.body
//   console.log(userInfo.passWord,"login password");
//   let user
//   try{

//        user=   await User.findOne({email:userInfo.email})
//        console.log(user.passWord,"signup passs");

//   }catch{
//       console.log('errr');

//   }
//   if(!user){
//       res.send('user not found')
//   }
//   else{                                                                          
//      let validPassoword=   await bcrypt.compare(userInfo.passWord,user.passWord)
//           .catch((err)=>{
//               console.log(err,'while matching passWord');
//           })
//           console.log(validPassoword,"valid");
//           if(!validPassoword){
//               res.send('Invalid passWord')
//           }
//           else{
//               res.send('login ho gyaa')
//           }
         
//   }

//   // res.send(userInfo)
//   // console.log(userInfo,"rrr");

// })

// app.get('/',(req,res)=>{
//   res.send('helllo')
// })

// app.listen(5000,()=>{
//   console.log('server running on 5000');
// })



 let express=   require('express')
 let app=   express()

 app.set('view engine', 'ejs')

 app.get('/',(req,res)=>{
  res.render('index')

 })
 app.get('/random',(req,res)=>{
  res.render('random')

 })

 app.listen(8000,()=>{
  console.log('server runnning....');

 })


 



       
