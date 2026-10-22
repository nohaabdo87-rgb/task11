 
 


 const users = [{
    name: "yassin",
    password: "1234"
 },
  {
    name: "losinda",
    password: "89234644"
 }
 ]

 function createUser() {
    let name = prompt("Enter your name")
    let password = prompt("Enter your password")
    const newUser = {
        name: name,
        password: password,
    }

    users.push(newUser)

    showUsers()
    
 }

 function showUsers() {
     console.clear()
    for (let i = 0; i < users.length; i++) {
        console.log(`${i+1}- ${users[i].name} => ${users[i].password}`)
    }
 }

 showUsers()

 function deleteUser(){
    
    const userNum = prompt("Enter user number :")-1

  users.splice(userNum,1)
  showUsers()
 }

 function updateUser(){

    const userNum = prompt ("Enter user number :") -1 ;

     const newName = prompt("enter your name");
     const newPassword = prompt("enter your password");

   const newUser ={
        name: newName,
        password: newPassword,
    };

    users.splice(userNum,1 , newUser);
    showUsers()
 }
 
 

// //  proplem solving
//  Task:
// (choose the right answer)
// 1- What is the output in console:

// if (true) {
//     var x = 10;
// }

// console.log(x);

// A. undefined
// B. 10
// C. null
// D. error

// ---------

// 2- What is the output in console:

// console.log(x);

// var x = 10;

// A. undefined
// B. 10
// C. null
// D. error

// ----------

// 3- What is the output in console:

// console.log(x);

// const x = 10;

// A. undefined
// B. 20
// C. null
// D. error

// ----------

// 4- What is the output in console:

// function test() {
//     var x = 20;
// }

// test();

// console.log(x);

// A. undefined
// B. 20
// C. null
// D. error

// ----------

// 5- What is the output in console:

// sayHello();

// function sayHello() {
//     console.log("Hello");
// }

// A. undefined
// B. "Hello"
// C. null
// D. error

// ----------

// 6- What is the output in console:

// var x = 10;

// function test() {
//     console.log(x);

//     var x = 20;
// }

// test();

// A. undefined
// B. 10
// C. 20
// D. error

// ----------

// 7- What is the output in console:

// var x = 1;

// function test() {
//     console.log(x);

//     if (true) {
//         var x = 2;
//     }

//     console.log(x);
// }

// test();


// A. undefined - 2
// B. 2 - 2
// C. undefined - undefined
// D. error - 2

// ----------

// 8- What is the output in console:

// let x = 10;

// function outer() {
//     let x = 20;

//     function inner() {
//         let x = 30;
//         console.log(x);
//     }

//     inner();
//     console.log(x);
// }

// outer();
// console.log(x);

// A. 30 - 20 - 10
// B. 10 - 20 - 30
// C. 10 - 30 - 30
// D. 10 - 20 - 20

// ----------

// 9- 

// var x = 10;

// {
//     let x = 20;

//     {
//         var x = 30;
//     }

//     console.log(x);
// }

// console.log(x);

// A. 10 - 20
// B. 10 - 30 
// C. 10 - undefined 
// D. 10 - error



1- B
2- A 
3- D 
4- B 
5- B 
6- C 
7- A 
8- A 
9- D  