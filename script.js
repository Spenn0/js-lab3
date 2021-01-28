"use strict";
//#1
let submissions = [
  { name: "Jane", score: 95, date: "2020 - 01 - 24", passed: true },
  { name: "Joe", score: 77, date: "2018 - 05 - 14", passed: true },
  { name: "Jack", score: 59, date: "2019 - 07 - 05", passed: false },
  { name: "Jill", score: 88, date: "2020 - 04 - 22", passed: true },
];

//#2 PUSH
//2.Declare a function named addSubmission ○Parameter(s): array , newName , newScore , newDate ○Functionality: construct an object and push it into   the array . The object must have the same properties as the objects already in the array. Use conditional statements to   set the value for the passed property to   true if the score is greater than or equal to   60 and false otherwise.
const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  // return (newScore >= 60 ? true : false)
  array.push(newSubmission);
};
// addSubmission(submissions, "Spudd", 99, "2021-3-23");

// console.log(submissions);

//#3 SPLICE
//3.Declare a function named deleteSubmissionByIndex ○Parameter(s): array , index ○Functionality: remove the object from the array at the specified index using the splice method.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
// deleteSubmissionByIndex(submissions, 1);

// console.log(submissions);

//#4
//4.Declare a function named deleteSubmissionByName ○Parameter(s): array , name ○Functionality: remove the object from the array that has the provided name . Incorporate the findIndex method and the splice method.
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((submission) => {
    return submission.name === name;
  });
  if (index !== -1) {
    deleteSubmissionByIndex(array, index);
  } else {
    console.log("No match");
    //   return name === -1;
  }
};
// deleteSubmissionByName(submissions, "Jack");
// console.log(submissions);

//5.Declare a function named editSubmission ○Parameter(s): array , index , score ○Functionality: [findIndex]update an object’s score in the array at the specified index . Use conditional statements to  set the value for the passed property to   true if the score is greater than or equal to   60 and false otherwise.

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passsed = score >= 60;
};
editSubmission(submissions, 2, 70);

// console.log(submissions);

//6.Declare a function named findSubmissionByName ○Parameter(s): array , name ○Functionality: return the object in the array that has the provided name . Use the find method.

const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};
//WE"RE DOING THISS TO SEE THE DATA THAT HAS BEEEN CALLED
console.log(findSubmissionByName(submissions, "Jill"));

//7.Declare a function named findLowestScore ○Parameter(s): array ○Functionality: return the object in the array that has the lowest score. Use the forEach method to   loop through the whole array.

// A callback function is a function that is passed as an argument
const findLowestScore = (array) => {
  let lowestScore = array[0].score;
  array.forEach((arrayItem) => {
    if (arrayItem.score < lowestScore) {
      lowestScore = arrayItem.score;
    }
  });
  return lowestScore;
};

console.log(findLowestScore(submissions));
//8.Declare a function named findAverageScore ○Parameter(s): array ○Functionality: return the average quiz score. Use a for...of loop.

//9.Declare a function named filterPassing ○Parameter(s): array ○Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores.
const filterPassing = (array) => {
  return array.filter((item) => {
    return item.passed;
  });
};
console.log(filterPassing(submissions));
//10.Declare a function named filter90AndAbove ○Parameter(s): array ○Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to   90.

const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};
console.log(filter90AndAbove(submissions));
