// Write a program that performs an HTTP GET request to a URL provided to you  
//   as the first command-line argument. Collect all data from the server (not  
//   just the first "data" event) and then write two lines to the console  
//   (stdout).  
   
//   The first line you write should just be an integer representing the number  
//   of characters received from the server. The second line should contain the  
//   complete String of characters sent by the server. 

// Use a third-party package to abstract the difficulties involved in  
//   collecting an entire stream of data. Two different packages provide a  
//   useful API for solving this problem (there are likely more!): bl (Buffer  
//   List) and concat-stream; take your pick!  
// response.pipe(bl(function (err, data) { /* ... */ }))  
//      // or  
//      response.pipe(concatStream(function (data) { /* ... */ }))  



const http = require('http')
const bl = require('bl')

http.get (process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
        console.log(data.length)
        console.log(data.toString())
    }))
} ) 
 
  
      
