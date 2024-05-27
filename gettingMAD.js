let absoluteDifference = (a, b) => {
    return Math.abs(b - a);
}

function gettingMad(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            result.push(absoluteDifference(array[i], array[j]));
        }
    }
    if (result.length === 0) {
        return 0;
    } else {
        return Math.min(...result);
    }
}


//Parameters: an array of at least two elements, both of which are numbers

//Return value: a positive number like 10, 7, 3, 1

//Example: [-10, 0] => 10 because |-10 - 0| = 10

//Psuedocode: 

//for each element, compare it to all the other elements and find the absolute difference

//add each absolute difference to an array

//return the minimum of the array
