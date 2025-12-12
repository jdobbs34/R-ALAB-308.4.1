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

let results = [
  ["42", "Bruce", "Kinght", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor's Asst", "26"]
];

let objectData = results.map((row) => {
  let obj = {};
  headers.forEach((header, index) => {
    obj[header.toLowerCase()] = row[index];
  });
  
  return obj;
  
});

console.log(objectData)

// Part 4
console.log("-----------------------------------------------------------")

//   Used shift dletefirst row from array.
let removeRow = objectData.shift();

//  Recereated first row then made second row.
let startInsert = {  id: '42', name: 'Bruce', occupatioin: 'Kinght', age: '41'};
let insertRow = { id: "48", name: "Barry", occupation: "Runner", age: "25" };

//  Use unshift to resinert forst and add second row.
let addRows = objectData.unshift({ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" });

//  Use pop to delete last row
removeRow = objectData.pop({ id: '98', name: 'Bill', occupatioin: "Doctor's Asst", age: '26' })

// use push to replace last row
let addRow = objectData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

console.log(objectData)

// Part 5
console.log("-----------------------------------------------------------")

let arrayToCsv = (data) => {

  let headers = Object.keys(data[0]);

  // 2. Create the header row string
  let csvRows = [];
  csvRows.push(headers.join(','));

  // 3. Loop over the data rows
  for (let row of data) {
    let values = headers.map(header => {
      // Basic quoting to handle commas within data values
      let value = row[header];
      return `"${value}"`;
    });
    // Join values with commas and push to the rows array
    csvRows.push(values.join(','));
  }

  // 4. Join all rows with a newline character
  return csvRows.join('\n');
};

let cvsString = arrayToCsv(objectData)

console.log(cvsString)






