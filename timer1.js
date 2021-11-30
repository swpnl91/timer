let arr = process.argv;   // takes arguments from command line and stores in an array as strings
let numbers = arr.slice(2);  // removes first two elements whih are not needed
let arr1 = [];


for (let i = 0; i < numbers.length; i++) {
  if (Number(numbers[i]) && Number(numbers[i]) > 0) {   // checking edge cases
    arr1.push(Number(numbers[i]));
  }
  else {
    arr1 = arr1;
  }
}

arr1.sort((a, b) => a - b); // sorting the array

for (i = 0; i < arr1.length; i++) {
  delay = arr1[i] * 1000;      // * by 1000 for seconds
  setTimeout (() => {
    process.stdout.write('\x07');
  }, delay)
}

