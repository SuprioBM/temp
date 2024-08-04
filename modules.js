// //Modules


// const names = require('./4-names')
// const sayHi= require('./5-utils')
// const data= require('./6-alter')
// console.log(names)
// console.log(data)
// console.log(sayHi)
// require('./7-mind-gerande')

// // sayHi('susan')
// // sayHi(names.john)
// // sayHi(names.peter) 

// ///os
// const os = require('os')

// //info about current user
// const user =os.userInfo()
// console.log(user);


// //method returns the system uptime in seconds

// console.log(`this system uptime is ${os.uptime()} seconds`)


// const currentOs ={
//     name:os.type(),
//     release:os.release(),
//     totalMem: os.totalmem(),
//     freemem: os.freemem(),

// }
// console.log(currentOs)



// //path modules

// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('./content','subfolder','test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)


// const absolute = path.resolve(__dirname,'./content','subfolder','test.txt')
// console.log(absolute)


// //fs,sync
// // const fs = require('fs')
// // fs.read
// const {readFileSync,writeFileSync} = require('fs');

// const first = readFileSync('./content/first.txt','utf8')
// const sec = readFileSync('./content/sec.txt','utf8')

// writeFileSync('./content/result-sync.txt',
//     `here is the result ${first},${sec}`,{flag:'a'})


// //fs,callback,async
// const {readFile,writeFile} = require('fs');

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return 
//     }
//     const first = result;
//     readFile('./content/sec.txt','utf8',(err,result)=>{
//         if(err){
//             console.log(err)
//             return 
//         }
//         const second = result
//         writeFile('./content/result-async.txt',
//             `${first},${second}`
//             ,(err,result)=>{
//             if(err){
//                 console.log(err);
//                 return
//             }
//             console.log(result)
//         })  
//     })
// })


//http
const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url==='/'){

    res.end('welcome to our home page')
}
if(req.url === '/about'){
    res.end("this is our about page")
}
res.end(`
    <h1>Opps</h1>
    <p>we cant seem to find the page</p>
    <a href='/'>back Home</a>
    `)
})
server.listen(8080)