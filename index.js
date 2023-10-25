// function sumAll(arr) {
//     let max = Math.max(arr[0], arr[1]);
//      let min = Math.min(arr[0], arr[1]);
//      let sumOfelements = 0;
//      for (let i = min; i <= max; i++) {
//        sumOfelements += i;
//      }
//      return sumOfelements;
//    }
   
//    sumAll([1, 4]);



// diff two arrays
// function diffArray(arr1, arr2) {
//     const newArr = [];
//     arr1.map((ele)=>{
//       if(!arr2.includes(ele)){
//         newArr.push(ele)
//       }
//     })
  
//     arr2.map((ele)=>{
//       if(!arr1.includes(ele)){
//         if(!newArr.includes(ele))
//         newArr.push(ele)
//       }
//     })
//     return newArr;
//   }
  
//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// seek and destroy

function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      let removeElement = false;
      for (let j = 0; j < valsToRemove.length; j++) {
        if (arr[i] === valsToRemove[j]) {
          removeElement = true;
        }
      }
      if (!removeElement) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }

//   wherefore art thoug

function whatIsInAName(collection, source) {
   
    const collectionMatches = [];
  
    for (let i = 0; i < collection.length; i++) {
      let foundElement = false;
  
      for (const sourceProp in source) {
        if (collection[i][sourceProp] !== source[sourceProp]) {
          foundElement = true;
        }
      }
      if (!foundElement) {
        collectionMatches.push(collection[i]);
      }
    }
    return collectionMatches;
  }


//   spinal tap case

function spinalCase(str) {
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');


//   pig latin
function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";
 
   const element = str.match(/^[^aeiou]+/)[0];
   return str.substring(element.length) + element + "ay";
 }
 
 
 translatePigLatin("consonant");


//  search and replace

function myReplace(str, before, after) {
    var index = str.indexOf(before);
   
    if (str[index] === str[index].toUpperCase()) {
      
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    
    str = str.replace(before, after);
  
    return str;
  }
  
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



  //   DNA Pairing 
  function pairElement(str) {
 
    const matches = function(char) {
      switch (char) {
        case "A":
          return ["A", "T"];
        case "T":
          return ["T", "A"];
        case "C":
          return ["C", "G"];
        case "G":
          return ["G", "C"];
      }
    };
  
  
    const pairsOfelement = [];
    for (let i = 0; i < str.length; i++) {
      pairsOfelement.push(matches(str[i]));
    }
    return pairsOfelement
  }


  //missing letter

  function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
  if (charCode !== str.charCodeAt(0) + i) {
           return String.fromCharCode(charCode - 1);
      }
    }
    return undefined;
  }
  
  
  fearNotLetter("abce");


//   sorted union

function uniteUnique(arr1, arr2, arr3) {
    const finalArray = [];
    for (let i = 0; i < arguments.length; i++) {
      const arrayArguments = arguments[i];
  
     
      for (let j = 0; j < arrayArguments.length; j++) {
        let indexValue = arrayArguments[j];
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
  
    return finalArray;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//   covert Html entities

function convertHTML(str) {
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  convertHTML("Dolce & Gabbana");

//   sum of all odd numbers of fibonacci series

function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  sumFibs(4);


//   sum of all prime numbers

function sumPrimes(num) {
    function isPrimeNumber(num) {
      const square = Math.sqrt(num);
      for (let i = 2; i <= square; i++) {
        if (num % i === 0)
          return false;
      }
      return true;
    }
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrimeNumber(i))
        sum += i;
    }
    return sum;
  }


//   smallest comon multiple

function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
   
    let element = 1;
    for (let i = min; i <= max; i++) {
      element *= i;
    }
   for (let j = max; j <= element; j += max) {
      let divisorCount = 0;
      for (let i = min; i <= max; i++) {
        if (j % i === 0) {
          divisorCount += 1;
        }
      }
      if (divisorCount === numberDivisors) {
        return j;
      }
    }
  }
  
  smallestCommons([1, 5]);


//   drop it

function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
     arr.shift();
   }
   return arr;
 }
 
 
 dropElements([1, 2, 3], function(n) {return n < 3; });


//  Steamroaler

function steamrollArray(arr) {
    const flatArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
       
        flatArr.push(...steamrollArray(arr[i]));
      } else {
     
        flatArr.push(arr[i]);
      }
    }
    return flatArr;
  };
  
  
  steamrollArray([1, [2], [3, [[4]]]]);


//   binary agents
function binaryAgent(str) {
    var binarystr = str.split(" ");
    var arr1 = [];
    for (var i = 0; i < binarystr.length; i++) {
      arr1.push(String.fromCharCode(parseInt(binarystr[i], 2)));
    }
  
   
    return arr1.join("");
  }
  
  
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  );

//   

// everything be true

function truthCheck(collection, pre) {
    return collection.every(obj => obj[pre]);
   }
   
   truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");


//    arguments optional

function addTogether() {
    const [first, second] = arguments;
  
    if (typeof (first) === "number") {
      if (typeof (second) === "number") return first + second;
      if (arguments.length === 1) return (second) => addTogether(first, second);
    }
  }



//   make a person

const Person = function(first, last) {
    let firstName = first;
    let lastName  = last;
  
    this.getFirstName = function() {
      return firstName;
    };
  
    this.getLastName = function() {
      return lastName;
    };
  
    this.getFullName = function() {
      return this.getFirstName() + " " + this.getLastName();
    };
  
    this.setFirstName = function(first) {
      return firstName = first;
    };
  
    this.setLastName = function(last) {
      return lastName = last;
    };
  
    this.setFullName = function(first, last) {
      this.setFirstName(first);
      this.setLastName(last);
      return this.getFullName();
    };
  };
  
  const bob = new Person("Bob", "Ross");
  console.log(bob.getFullName());


//   map the debris
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let res = [];
    arr.map((ele)=>{
      const c = Math.pow(earthRadius + ele.avgAlt, 3);
      let temp = 2 * Math.PI * Math.sqrt(c/ GM);
      res.push({name:ele.name,orbitalPeriod:Math.round(temp)})
    });
    return res;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);