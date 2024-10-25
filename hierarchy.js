// Hirearchical:
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} speaks.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
}

// Usage
const dog = new Dog("Buddy");
dog.speak(); // Outputs: "Buddy speaks."

const cat = new Cat("Whiskers");
cat.speak(); // Outputs: "Whiskers speaks."
