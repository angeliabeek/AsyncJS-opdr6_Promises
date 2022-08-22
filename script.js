/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns 
a Promise that tests if the value is less than or greater than the value 10. 
Log the result to the console.
*/

const testNum = (number) => {
    return new Promise((resolve, reject) => {
        if (number <= 10) {
            resolve(`${number} is less than 10`)
        }
        else {
            reject(`${number} is greater than 10`)
        }
    });
};
testNum(2).then((resolved) => console.log(resolved));
testNum(15).catch((error) => console.log(error));


/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, 
makeAllCaps(), will take in an array of words and capitalize them, and then 
the second function, sortWords(), will sort the words in alphabetical order. 
If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/
const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
            if (array.every((item) => {return typeof item === 'string'})) {
                resolve(array.map((word) => { return word.toUpperCase()}));
            }
            /* mijn oplossing want 1 regel
            if (array.every(item => typeof item === 'string')) {
                resolve(array.map(word => word.toUpperCase()));
            } */
            else {
                const error = new Error("The array contains anything but strings");
                reject(error)
            }
        });
};

const sortWords = (array) => {
    return new Promise((resolve, reject) => {
            if (array.every(item => typeof item === 'string')) {
                resolve(array.sort());
            }
            else {
                const error = new Error("The array contains anything but strings");
                reject(error)
            }
        });
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocados'];
const complicatedArray = ['cucumber', 44, true];


/* Call both functions, chain them together and log the result to the console */
makeAllCaps(arrayOfWords)
    .then((resolved) => sortWords(resolved))
    .then((resolved) => console.log(resolved))
    .catch((error) => console.log(error.message));

makeAllCaps(complicatedArray)
    .then((resolved) => sortWords(resolved))
    .then((resolved) => console.log(resolved))
    .catch((error) => console.log(error.message));

