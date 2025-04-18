// Problem 1

const Sam = {
"firstName" : "Sam" ,
"department" : "Tech",
"designation" : "Manager",
"salary" : 40000,
"raiseEligible" : true
}

const Mary = {
    "firstName" : "Mary" ,
    "department" : "Finance",
    "designation" : "Trainee",
    "salary" : 18500,
    "raiseEligible" : true
    }

const Bill = {
    "firstName" : "Bill" ,
    "department" : "HR",
    "designation" : "Executive",
    "salary" : 21200,
    "raiseEligible" : false
    }

console.log(Sam);
console.log(Bill);
console.log(Mary);



// Problem 2
const Company = {
    "companyName" : "Tech Stars" ,
    "website" : "www.techstars.site",
    "employees" : [Bill, Mary, Sam]
}

console.log(Company);



// Problem 3

const Anna = {
    "firstName" : "Anna" ,
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "raiseEligible" : false
}

Company.employees.push(Anna);
console.log(Anna);
console.log(Company.employees)



// Problem 4

totalSalary = 0;
for (let i = 0; i < Company.employees.length; i++){
    totalSalary = totalSalary + Company.employees[i].salary;
} 
console.log(totalSalary);


// Problem 5
for (let employee of Company.employees){
    if (employee.raiseEligible === 'true'){
        employee.salary = String(Company.employees[i].salary*(1.1));
        employee.raiseEligible = 'false';
    }
    console.log(employee);
    console.log(employee.salary);
    console.log(employee.raiseEligible);
} 




// Problem 6
Company.employees.wfh ='false';
for(let employee of Company.employees){
    employee['wfh'] = 'false';
    if (employee.name === 'Sam' || 'Anna'){
        employee.wfh = 'true';
    }
    console.log(employee);
}

