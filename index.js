// // for loop

// // quesstion no 1

let x = 1
for (let x = 1; x <= 10; x++) {
    console.log(x);
}

// // question no 2

// let i = 2
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// // question no 3

// let i = 1
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// question no 4

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// question no 5

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum = sum + i; 
}

console.log("Sum of first 50 natural numbers is: " + sum);

            // while loop

// question no 1

let a = 1;

while (a <= 5) {
    console.log(a);
    a++;  
}

// question no 2
        
let i = 1;

while (i <= 15) {
    console.log(i);  
    i += 2;           
}

// question no 3

let num = 5;
let fact = 1;

while (num > 0) {
    fact = fact * num; 
    num--; 
}

console.log("Factorial of 5 is: " + fact);

// question no 4

let numm = 20

while(numm >=10){
    console.log(numm);
    numm--;
}

// question no 5

let nummm = 1;   
let summ = 0;    

while (summ <= 30) {
    console.log("Number: " + nummm);
    summ = summ + nummm;  
    nummm++;            
}

console.log("Final Sum: " + summ);

        // do while loop

// question no 1

let mmm = 1;

do {
    console.log(mmm); 
    mmm++;             
} while (mmm <= 5);

// question no 2

let v = 3; 

do {
    console.log(v);   
    v += 3;      
} while (v <= 30);

// question no 3

let b = 15;

do{
    console.log(b);
    b--;
}while(b>=1)

// question no 4

let c = 1;        
let product = 1;   

do {
    console.log(c);    
    product *= c;         
    c++;                  
} while (product <= 1000);

// question no 5

let d = 1;  

do {
    if (d !== 5) {       
        console.log(d);
    }
    d++;   
} while (d <= 10);

        // conditional statement

// question no 1

let number = 8; 

if (number > 0) {
    console.log("The number is Positive");
} else if (number < 0) {
    console.log("The number is Negative");
} else {
    console.log("The number is Zero");
}

// question no 2

let numbers = 7;   

if (numbers % 2 === 0) {
    console.log("The number is Even");
} else {
    console.log("The number is Odd");
}

// question no 3

let f = 55;
let g = 42;
let h = 19;

if (f >= g && f >= h) {
    console.log("The largest number is: " + f);
} else if (g >= f && g >= h) {
    console.log("The largest number is: " + g);
} else {
    console.log("The largest number is: " + h);
}

// question no 4 

let year = 2024;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}

// question no 5

let dayNumber = 3;  

if (dayNumber === 1) {
    console.log("Monday");
} else if (dayNumber === 2) {
    console.log("Tuesday");
} else if (dayNumber === 3) {
    console.log("Wednesday");
} else if (dayNumber === 4) {
    console.log("Thursday");
} else if (dayNumber === 5) {
    console.log("Friday");
} else if (dayNumber === 6) {
    console.log("Saturday");
} else if (dayNumber === 7) {
    console.log("Sunday");
} else {
    console.log("Invalid input! Please enter a number between 1 and 7.");
}
