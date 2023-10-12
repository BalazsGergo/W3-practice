/* function getFirstThreeChars(str, n) {
    let result = ""
 
    result = str.substring(0,n + 1)
        
    

    return result
}

console.log(getFirstThreeChars("Codecool",5))

let arr = [1,21,3,444,56,1000]

console.log(arr.sort())  // abc szerint rendez
console.log(arr.sort((a,b)=> a -b )) // novekvo sorrendbe
console.log(arr.sort((a,b)=> b -a )) // csokkeno sorrendbe 
 */

/* let obj = {
    name: 'Balazs Gergo',
    age: 25,
    favoriteDrink: 'RB',

}

let objKeys = Object.keys(obj)

for (const key of Object.keys(obj)) {
    console.log(key)
    console.log((obj)[key])
} */

function icyHot(temp1, temp2){
    if (temp1 > 0 && temp2 < 0) {
    return true
    } if else (temp1<0 && temp2 >0) {
    return true
    }
  }