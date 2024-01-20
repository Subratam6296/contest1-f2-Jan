let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  const developers = arr.filter(person => person.profession === 'developer');
  console.log('Developers:', developers);
}

function addData() {
  const newData = { id: 4, name: 'emma', age: 22, profession: 'designer' };
  arr.push(newData);
  console.log('Data added:', newData);
}

function removeAdmin() {
  const updatedArr = arr.filter(person => person.profession !== 'admin');
  console.log('Array with admins removed:', updatedArr);
}

function concatenateArray() {
  const newArray = [
    { id: 5, name: 'michael', age: 25, profession: 'analyst' },
    { id: 6, name: 'susan', age: 23, profession: 'engineer' },
  ];
  const concatenatedArr = arr.concat(newArray);
  console.log('Concatenated Array:', concatenatedArr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
