"use strict";

const ul = document.getElementById("list");

for (let i = 1; i <= 100; i++) {
    const element = document.createElement('li')
    element.innerHTML = i;
    
    ul.append(element);

    if( i % 15 == 0 ){
        element.innerHTML = "FizzBuzz";
        element.classList.add("fizzbuzz")
    }
    else if( i % 3== 0 ){
        element.innerHTML = "Fizz";
        element.classList.add("fizz")
    }
    else if( i % 5 == 0 ){
        element.innerHTML = "Buzz";
        element.classList.add("buzz")
    }
}