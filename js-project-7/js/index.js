// 1.

class School {
  student(name, email, contact) {
    console.log("=== Student Details ===");
    console.log("Name     :", name);
    console.log("Email    :", email);
    console.log("Contact  :", contact);
  }

  faculty(name, email, contact) {
    console.log("=== Faculty Details ===");
    console.log("Name     :", name);
    console.log("Email    :", email);
    console.log("Contact  :", contact);
  }
}

// let Myschool = new School();

// Myschool.student("Ravi Siddhapura", "ravi.siddhapura@gmail.com", "9999999991");

// Myschool.faculty("Prof. Girish", "Girshsir.prof@gmail.com", "888899991");

// OUTPUT = 

// === Student Details ===
// Name     : Ravi Siddhapura
// Email    : ravi.siddhapura@gmail.com
// Contact  : 9999999991
// === Faculty Details ===
// Name     : Prof. Girish
// Email    : Girshsir.prof@gmail.com
// Contact  : 888899991



// 2.

// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   showDetails() {
//     console.log("PERSON DETAILS");
//     console.log("Name:- ", this.name);
//     console.log("Age:- ", this.age);
//   }
// }


// class employee extends person {
//   constructor(name, age, employeeID, Designation) {

//     super(name, age);

//     this.employeeID = employeeID;
//     this.Designation = Designation;
//   }

//   EmployeeDetails(){

//     this.showDetails();
//     console.log("Employee ID:- ", this.employeeID);
//     console.log("Designation:- ", this.Designation);
//   }
// }

// let emp = new employee("Ravi siddhapura" , 25 , "EM777" , "Web Developer");

// emp.EmployeeDetails();

// OUTPUT = 

// PERSON DETAILS
// Name:-  Ravi siddhapura
// Age:-  25
// Employee ID:-  EM777
// Designation:-  Web Developer



// 3.

// class Employee {
//     constructor() {
//         console.log("Good Morning!");
//     }
// }

// let emp = new Employee();

// OUTPUT = Good Morning!



// 4.

// class Shape{

//   circle(radius){
//     let area = 3.14 * radius * radius;
//     console.log("area of circle:- ", area);
//   }

//   rectangle(width,height){
//     let area = width * height;
//     console.log("area of rectangle:- ", area);
//   }
// }

// let shape = new Shape();

// shape.circle(5);
// shape.rectangle(3,2);

// OUTPUT = 

// area of circle:-  78.5
// area of rectangle:-  6



// 5.

// function Mobile(model = "samsung"){
//   console.log("Mobile model :- " , model);
// }

// Mobile.prototype.Setcolor = function(color){
//   this.color = color;
//   console.log("Mobile color :- ", color);  
// }

// let obj = new Mobile();

// obj.Setcolor("blue");

// OUTPUT = 

// Mobile model :-  samsung
// Mobile color :-  blue



// 6.

// function employee(name = "Ravi", email = "ravi@123.com" , salary = 70000 ){
//   console.log("employee name:- ", name);
//   console.log("employee email:- ",email);
//   console.log("employee salary:- ", salary);
// } 

// employee.prototype.SetDesignation = function(Designation){
//   this.Designation = Designation;
//   console.log("Employee designation:- ", Designation);
// }

// let obj = new employee();

// obj.SetDesignation("web developer");

// OUTPUT = 

// employee name:-  Ravi
// employee email:-  ravi@123.com
// employee salary:-  70000
// Employee designation:-  web developer