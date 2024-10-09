let getNextDefinedNum = (i, arr) => {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] !== undefined) {
            return { value: arr[j], index: j };
        }
    }
    return null;
};

let getPreviousDefinedNum = (i, arr) => {
    for (let j = i - 1; j >= 0; j--) {
        if (arr[j] !== undefined) {
            return { value: arr[j], index: j };
        }
    }
    return null;
};

let getClosestDefinedNum = (i, arr) => {
    const prevObj = getPreviousDefinedNum(i, arr);
    const nextObj = getNextDefinedNum(i, arr);

    if (!prevObj && !nextObj) {
        return undefined;
    }

    const prevDistance = prevObj ? i - prevObj.index : Infinity;
    const nextDistance = nextObj ? nextObj.index - i : Infinity;

    if (prevDistance < nextDistance) {
        return prevObj.value;
    } else if (nextDistance < prevDistance) {
        return nextObj.value;
    } else {
        // Distances are equal, choose the smallest value
        return Math.min(prevObj.value, nextObj.value);
    }
};

function fill(arr, method = 0) {
    const result = arr.slice(); // Create a copy of the array to hold the results

    if (method === -1) {
        // Replace undefined values with closest int on the right
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
                const nextObj = getNextDefinedNum(i, arr); // Use the original array
                if (nextObj) {
                    result[i] = nextObj.value;
                }
            }
        }
    } else if (method === 0) {
        // Replace undefined values with closest defined number, choose smallest if equidistant
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
                const closestValue = getClosestDefinedNum(i, arr); // Use the original array
                if (closestValue !== undefined) {
                    result[i] = closestValue;
                }
            }
        }
    } else if (method === 1) {
        // Replace undefined values with closest int on the left
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
                const prevObj = getPreviousDefinedNum(i, arr); // Use the original array
                if (prevObj) {
                    result[i] = prevObj.value;
                }
            }
        }
    }
    return result;
}

/*
Params:
arr is the array of numbers and undefined
method is either -1, 0, or 1

Return Value:
the array, but with all numbers filled in according to the rules.
Note the case where the first or last value is undefined and there is not suitable replacement, in which
case it just stays undefined

Example:
fill([undefined,1,1,1,2,undefined,undefined,2],1) => [1,1,1,1,2,2,2,2]
*/
