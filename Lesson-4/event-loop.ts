/* console.log('1');
console.log('2');
console.log('3'); */

/* console.log('Start');
setTimeout(() => {
  console.log('Set Timeout');
}, 0);
console.log('End'); */

/* console.log('Start');
setTimeout(() => {
  console.log('Set Timeout');
}, 0);
Promise.resolve().then(() => console.log('Promise'));   
console.log('End'); */

// Log the first task, "1- Task", to the console
console.log('1- Task');

// Set a timeout to log "2- Set Timeout" to the console after 0 milliseconds
setTimeout(() => {
  console.log('2- Set Timeout'); // This will be added to the event queue after the current execution stack
}, 0);

// Create a resolved promise that logs "3- Promise" after the current call stack completes
Promise.resolve().then(() => console.log('3- Promise')); // The promise will execute after the synchronous code

// Log the second task, "4- Task", to the console
console.log('4- Task'); // This will be logged immediately after the previous synchronous statements

// Set another timeout to log "5- Set Timeout" to the console after 0 milliseconds
setTimeout(() => {
  console.log('5- Set Timeout'); // This will also be added to the event queue after the current execution stack
}, 0);

// Log the third task, "6- Task", to the console
console.log('6- Task'); // This will be logged immediately after the previous synchronous statements

// Explanation of the execution order:
// - All console.log() statements (synchronous code) are executed first in order.
// - The promise resolves next, logging "3- Promise" after the synchronous stack finishes.
// - setTimeouts (as asynchronous code) are executed last, logging "2- Set Timeout" and "5- Set Timeout".
