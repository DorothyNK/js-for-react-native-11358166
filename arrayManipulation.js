// processArray function creation

function processArray(myArray){
  for(let i = 0; i < myArray.length; i++){
      let newNum = myArray[i] % 2
      if(newNum === 0){
         let finalNum = myArray[i] * myArray[i]
          console.log(finalNum)
      }else{
          let finalNum = myArray[i] * 3
          console.log(finalNum)
      }
  }return myArray
}


let newArray = [1,2,3,4]

processArray(newArray)



function formatArrayStrings(arrayStrings, newArray){
  for(let a = 0; a < arrayStrings.length; a++){

      if(newArray[a] % 2 === 0){
          arrayStrings[a] = arrayStrings[a].toUpperCase()
      }else{
          arrayStrings[a] = arrayStrings[a].toLowerCase()
      }
  }return arrayStrings
  

}


const stringArray = ['Naa','Chair', 'Carrot', 'Bed']

//Exporting the modifiedString
export const modifiedString = formatArrayStrings(stringArray, newArray)


console.log(modifiedString)