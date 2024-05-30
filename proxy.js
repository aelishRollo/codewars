function createEvenOrOddFunction() {
    function evenOrOdd(number) {
        let result = number % 2 === 0 ? "Even" : "Odd";
        evenOrOdd[number] = result;
        return result;
    }

    return new Proxy(evenOrOdd, {
        get: function(target, prop) {
            if (typeof prop === 'string' && !isNaN(prop)) {
                let number = parseInt(prop, 10);
                return target(number);
            }
            return target[prop];
        }
    });
}

const evenOrOdd = createEvenOrOddFunction();

console.log(evenOrOdd(4)); // 'Even'
console.log(evenOrOdd[4]); // 'Even'
console.log(evenOrOdd(7)); // 'Odd'
console.log(evenOrOdd[7]); // 'Odd'
console.log(evenOrOdd(2)); // 'Even'
console.log(evenOrOdd[2]); // 'Even'
console.log(evenOrOdd(5)); // 'Odd'
console.log(evenOrOdd[5]); // 'Odd'
