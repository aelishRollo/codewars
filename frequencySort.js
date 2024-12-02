function solve(arr) {
    // Create a frequency map
    const frequencies = {};
    for (let num of arr) {
        frequencies[num] = (frequencies[num] || 0) + 1;
    }

    // Sort the array by frequency (descending) and value (ascending)
    return arr.sort((a, b) => {
        if (frequencies[a] === frequencies[b]) {
            // If frequencies are the same, sort by numeric value (ascending)
            return a - b;
        }
        // Otherwise, sort by frequency (descending)
        return frequencies[b] - frequencies[a];
    });
}
