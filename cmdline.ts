//* argv
const ppl = Deno.args[0];
const food = Deno.args[1];
console.log(`Hello ${ppl}, I like ${food}!`);


// toast for cli
alert("Please acknowledge the message.");

//  y/n confirm return boolean value
const shouldProceed = confirm("Do you want to proceed?");
console.log("Should proceed?", shouldProceed);
// simple prompt
const name = prompt("Please enter your name:");
console.log("Name:", name);
// simple prompt with default value
const age = prompt("Please enter your age:", "18");
console.log("Age:", age);