// function add() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// function add(...args) {
//     return args.reduce((acc, el) => {
//         return acc + el;
//     })
// }

// console.log(add(1, 2, 3, 4, 5))

const myBind = {}


//   Function.prototype.myBind = function(newContext, ...args) {
//     //this is the function myBind is called on
//     let that = this;
//     return function(...callTime) {
//         that.call(newContext, ...args, ...callTime)
//     }
//   }

// //   Function.prototype.myBind = function() {
// //     //this is the function myBind is called on
// //     let that = this;
// //     let outerArgs = arguments;
// //     return function() {
// //         that.call(outerArgs[0], ...outerArgs[1..outerArgs.length], arguments)
// //     }
// //   }

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true 

//   function curriedSum(numArgs) {
//       let numbers = [];
//       return function _curriedSum(number) {
//         numbers.push(number);
//         if (numbers.length === numArgs) {
//             let sum = 0;
//             for (let i = 0; i < numbers.length; i++) {
//                 sum += numbers[i];
//             }
//             return sum;
//         } else {
//             return _curriedSum;
//         }
//     }
//     // return _curriedSum;
//   }

//   console.log(curriedSum(3)(1)(2)(3));

// function pushNum(number) {
//     numbers.push(number);
//   }
  Function.prototype.curry = function(numArgs) {
    let numbers = [];
    let that = this;
      return function _curry(number) {
        if (numbers.length < numArgs) {
            numbers.push(number);
            return Function.prototype.curry()
        } else if (numbers.length === numArgs) {
              that.apply(numbers)
        }
      }
  };

  function printArray(arr) {
      console.log(arr)
  }

  printArray.curry(3)(1)(2)(3);

  

  