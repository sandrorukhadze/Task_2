/* 1 დავალება
let num = 5;

while(num <= 100) {
    console.log(`ციფრი ${num}`);
    num++;
}

*/
/* 2 დავალება

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    if (element > 0 & element < 10) {
        console.log(element);
    }

}
*/

/* 3 დავალება

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let index = 0; index < array2.length; index++) {
    const element = array2[index];
    if (element == 5) {
        console.log('არის');
    }
}

*/


/* 4 დავალება

let array3= [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < array3.length; i++ ) {
  sum += array3[i];
}

console.log(sum) 
*/


/* 5 დავალება

let array3= [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < array3.length; i++ ) {
  sum += array3[i] / 2;
}

console.log(sum) 


/* 6 დავალება

let array5 = [1, 2, 3, 7, 6, 9];

for (let item of array5) {
    if (item == 7) {
    continue;
}
console.log(item);
}
*/

/* 7 დავალება
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,  
  studentstatus: "active"
};

console.log(user.studentstatus);

*/

/* 8 დავალება
let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}

if (user2.age < 18 & user2.studentstatus == 'active') {
  console.log('hello user');
}

if (user2.name == 'levani') {
  console.log('hello levan');
}

if (user2.studentstatus == 'active' || user2.age < 25) {
  console.log('Hello Anna');
} else {
  console.log('error');
}

*/

/* 9 დავალება
let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10]

for(let i = 0; i < array6.length; i++) {
       if (array6[i] % 2 == 0)
      console.log(array6[i]);
}

*/
/*
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for (let item of users) {
  console.log(item.status);
}*/
