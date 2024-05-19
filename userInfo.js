//ModifiedString importation

import {modifiedString} from "./arrayManipulation.js"


//Create a function creatUserProfiles that take 2 arrays as an argument

function createUserProfiles(names, modifiedString){
    const person = []
    let id = 1

    for(let i = 0; i < names.length; i++){
        person.push({
            name: names[i],
            otherName: modifiedString[i],
            ID: id++
        })
        
    }return person
}

let names = ["Dzifa","Ammish", "Nii", "Heidi"]

console.log(createUserProfiles(names, modifiedString))