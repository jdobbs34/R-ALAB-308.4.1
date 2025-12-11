// Part 1
let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let commas = 0;


for (let i = 0; i < str.length; i++) {

  let current = str[i];

  if (current == ",") {
    
    commas++;
  } else if (current == "\n") {
     console.log(cell1, cell2, cell3, cell4);
    
    commas = 0;
    cell1 = '';
    cell2 = '';
    cell3 = '';
    cell4 = '';
  } else {
    
    if (commas == 0) {
      
      cell1 += current;
    } else if (commas == 1) {
      cell2 += current;
    } else if (commas == 3) {
      cell3 += current;
    } else {
      cell4 += current;
    }
  }


   if(i + 1 == str.length) {
  
     console.log(cell1, cell2, cell3, cell4);

  }
 
}

// Part 2
console.log("-----------------------------------------------------------")

// Split string and turned into an array

let myArray = str.split("\n");

// Using for loop to split string again
for (let i = 0; i < myArray.length; i++){
  myArray[i] = (myArray[i].split(","))
  
}
 
// Created 2 dimanional array to plcae my array inside
  myarrayofArray = [myArray]
console.log(myArray);

// Part 3
console.log("-----------------------------------------------------------")

// Careted 2 new vaiables to create 

let headers = ["ID", "Name", "Occupatioin","Age"]; // Example headers
console.log(headers)
let results = [
  ["42", "Bruce", "Kinght", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor's Assistant", "26"]
 console.log(results)
];

let objectData = results.map((row) => {
  let obj = {};
  headers.forEach((header, index) => {
    obj[header.toLowerCase()] = row[index];
  });
  return obj;
});

console.log(objectData)





