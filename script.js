const arr = ["kutya", "cica", "meresi hiba"]

const numbers = [40,56,453,45]

/* for (let i = 0; i < arr.length; i++) {

} */

/* for (const element of arr) {
    console.log(element)
} */

/* arr.forEach(function(element) {
  console.log(element)
})

arr.forEach((element) =>  console.log(element))

const newNumbers = []

 numbers.forEach(function (number, index) {
  let newNumber = number *2
  console.log(newNumber,index)
  newNumbers.push(newNumber)
})

console.log(newNumbers) */



/* const numberArray = [6,11,45,8,10,16,100]

const filterResult = numberArray.filter(function(number){
    if(number % 2 !== 0 ){
        return number
    }
})

console.log(filterResult) */

const numberArray = [6,11,45,8,10,16,100]

const filterResult = numberArray.filter((number) => number > 10 )
    

console.log(filterResult)