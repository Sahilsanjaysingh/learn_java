const student={
    fullname :"sahil sanjay singh ",
    age : 20,
    printAge :function(){
        console.log("age = ", age );
    },
};


const employee={
    calcTax(){
        console.log("Tax rate is 10%");
    },
}; 


const sahil={
    salary:100000,
    calcTax(){
        console.log("tax rate 20%");
    },
};
sahil.__proto__=employee;