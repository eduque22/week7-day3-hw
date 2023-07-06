//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function simple(obj) {
    console.log(obj)
}

simple(person3)




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`${this.name} is ${this.age} old!`)
    }

    this.addAge = () => {
        this.age++
    }
}

let duque = new Person('eduardo', 26)
console.log(duque.age)

duque.addAge()
duque.addAge()
duque.addAge()

console.log(duque.age)

duque.printInfo()



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


const isWordBig = (theWord) => {
    return new Promise ((resolve, reject) => {
        if (theWord.length > 10) {
            resolve(theWord)
        } else {
            reject(theWord)
        }
    })
}

isWordBig('intelligent')
    .then((result) => {
        console.log(`Big word: ${result}`)
    })
    .catch((error) => {
        console.log(`Small word: ${error}`)
    })




///Codewar Prob1
//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
      return 1
    } else if (month >= 4 && month <= 6) {
      return 2
    } else if (month >= 7 && month <= 9) {
      return 3
    } else if (month >=10 && month <= 12) {
      return 4
    }
    
  }



  ///Codewar Prob2
  ////The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!


  function sayHello(name) {
    return `Hello, ${name}`
  }