
//Tip run the single single question one at a time 

// console.log("\nAssignment 7 :");
// console.log("Question 1 :");

/* the first question is for how to read, write, append and delete the file.
first i import the fs module for read and write operations in the file.
then, it creates a file called notes.txt and writes the given text. 
If an error occurs during this process, it throws the error if no error occurs, it logs File created and text written to the console.
next it read notes.txt file and print it to the console if an error occurs during this process, it throws the error 
after that i append the given text into the file if an error occurs during this process, it throws the error else print file appended
at the end using unlink func i deleted the notes.txt file if an error occurs during this process, it throws the error else print file deleted
*/

const fs = require('fs');

fs.writeFile('notes.txt', 'My Name is Pavan Biradar doing internship at Static int care', (err) => {
  if (err) throw err;
  console.log('File created and text written');

  fs.readFile('notes.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);

    fs.appendFile('notes.txt', '\n and I am from Tpoly.', (err) => {
      if (err) throw err;
      console.log('File appended');

      fs.unlink('notes.txt', (err) => {
        if (err) throw err;
        console.log('File deleted.');
      });
    });
  });
});

// console.log("\nAssignment 7 :");
// console.log("Question 2 :");

const fs = require('fs');
//first i import the fs module for read and write operations in the file.
const write = () => {
    let text = '';
    for (let i = 0; i < 100; i++) {
        text += 'I am from Tpoly.\n';
    }
    return text;
}//here this func writes the given txt into the 100 times  

const sync = () => {
  // Function to perform sync file write and read operations
    const start_sync_write = Date.now();// Record start time for sync write 
    const largeText = write();
    fs.writeFileSync('syncfile.txt', largeText);// Write text to a file sync
    const end_sync_write = Date.now();// Record end time for synch write
    console.log(`Synchronous write took ${end_sync_write - start_sync_write}`);//print time taken for sync write

    const start_Sync_Read = Date.now();// Record start time for sync read
    const dataSync = fs.readFileSync('syncfile.txt', 'utf8');// read text from a file sync and store it to a variable
    const end_Sync_Read = Date.now();// Record end time for synch read
    console.log(`Synchronous read took ${end_Sync_Read - start_Sync_Read}`);//print time taken for sync read
};

const async = () => {
    const start_async_write = Date.now();//same as above but for async func 
    const largeText = write();
    fs.writeFile('asyncfile.txt', largeText, (err) => {
        if (err) throw err; //if an error occurs during this process, it throws the error 
        const end_async_write = Date.now();
        console.log(`Asynchronous write took ${end_async_write - start_async_write}`);

        const start_async_read = Date.now();
        fs.readFile('asyncfile.txt', 'utf8', (err, data) => {
            if (err) throw err;
            const end_async_read = Date.now();
            console.log(`Asynchronous read took ${end_async_read - start_async_read}`);
        });
    });
};

console.log('Starting synchronous file handling:');//indicate start of sync func
sync();//here i call the sync func 

console.log('\nStarting asynchronous file handling:');//indicate start of async func
async();//here i call the async func 


// console.log("\nAssignment 7 :");
// console.log("Question 3 :");

function doTask(callback) {// here i created a func and pass a func as parameter 
    console.log("Task started");// indicate start of task
    
    setTimeout(() => {//here i set a time out func and in this i call a func and print msg and set time of 2 sec
      console.log("Task completed");
      callback(); 
    }, 2000);
}
  
  function callbackFunction() {//here i created a func with no argument it will print the msg
    console.log("Callback executed");
  }
  
doTask(callbackFunction);// here i call the func and pass the func as parameter


// console.log("\nAssignment 7 :");
// console.log("Question 4 :");

function task1(callback) {// here i created a func and pass a func as parameter
    setTimeout(() => {//here i set a time out func and in this i call a func and print msg and set time of 1 sec
      console.log("T1 completed");
      callback(); 
    }, 1000);
}
  
function task2(callback) {// here i created a func and pass a func as parameter
    setTimeout(() => {//here i set a time out func and in this i call a func and print msg and set time of 2 sec
      console.log("T2 completed");
      callback(); 
    }, 2000);
}
  
function task3(callback) {// here i created a func and pass a func as parameter
    setTimeout(() => {//here i set a time out func and in this i call a func and print msg and set time of 3 sec
      console.log("T3 completed");
      callback(); 
    }, 3000);
}
// Call task1 and pass a function as a callback
task1(() => {// Inside the callback of task1, call task2 and pass a func as a callback
    task2(() => {// Inside the callback of task2, call task3 and pass a func as a callback
      task3(() => { // Inside the callback of task3, print msg
        console.log("All tasks completed");
      });
    });
});


// console.log("\nAssignment 7 :");
// console.log("Question 5 :");

function task1() {//here i created a func
    return new Promise((res, rej) => {//here created a promise obj 
      setTimeout(() => {//here i set a time out func and in this i call a func and print msg and set time of 1 sec
        console.log("T1 completed");
        res();//it resolve the promise
      }, 1000)
    });
  }
  
  function task2() {
    return new Promise((res, rej) => {
      setTimeout(() => {//here i set a time out func and in this i call a func and print msg and set time of 2 sec
        console.log("T2 completed");
        res(); 
      }, 2000)
    });
  }
  
  function task3() {
    return new Promise((res, rej) => {
      setTimeout(() => {//here i set a time out func and in this i call a func and print msg and set time of 3 sec
        console.log("T3 completed");
        res();
      }, 3000); 
    });
  }
  
  task1()//here call task1
    .then(() => task2())// When task1 is complete, execute task2
    .then(() => task3())// When task2 is complete, execute task3
    .then(() => {//then print given msg
      console.log("All tasks completed");
    })
    .catch((err) => {//if an error occurs during this process, it throws the error 
      console.error("An err occurred:", err);
    });
  