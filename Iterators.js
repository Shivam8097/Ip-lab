// 1. Custom Iterator for generating numbers up to a certain limit
function createNumberIterator(limit) {
    let current = 1;
    return {
        next() {
            if (current <= limit) {
                return { value: current++, done: false };
            } else {
                return { done: true };
            }
        }
    };
}

// Using the custom iterator
console.log("Custom Iterator:");
const numberIterator = createNumberIterator(5);
console.log(numberIterator.next()); // { value: 1, done: false }
console.log(numberIterator.next()); // { value: 2, done: false }
console.log(numberIterator.next()); // { value: 3, done: false }
console.log(numberIterator.next()); // { value: 4, done: false }
console.log(numberIterator.next()); // { value: 5, done: false }
console.log(numberIterator.next()); // { done: true }
console.log("-----------------------------");

// 2. Simple Generator function for generating numbers up to a certain limit
function* numberGenerator(limit) {
    for (let i = 1; i <= limit; i++) {
        yield i;
    }
}

// Using the generator
console.log("Simple Generator:");
const gen = numberGenerator(5);
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: undefined, done: true }
console.log("-----------------------------");

// 3. Fibonacci Generator for generating an indefinite Fibonacci sequence
function* fibonacciGenerator() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

// Using the Fibonacci generator to get the first 10 Fibonacci numbers
console.log("Fibonacci Generator:");
const fibGen = fibonacciGenerator();
for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value); // Outputs each Fibonacci number
}
console.log("-----------------------------");
