//Single:
class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} speaks`)
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    country(){
        console.log(`${this.name} who is a ${this.breed} breed is from india`)
    }
}

let obj = new Dog("Sheru" , "Rot viler")
obj.country();
obj.speak();

//Multi level:
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} speaks.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }
// }

// class Puppy extends Dog {
//     constructor(name, breed) {
//         super(name, breed);
//     }
//     play() {
//         console.log(`${this.name}, the puppy, plays.`);
//     }
// }

// const puppy = new Puppy("Buddy", "Golden Retriever");
// puppy.speak(); // Outputs: "Buddy speaks."
// puppy.play();  // Outputs: "Buddy, the puppy, plays."

// //Hirearchical:
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} speaks.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }
// }

// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//     }
// }

// // Usage
// const dog = new Dog("Buddy");
// dog.speak(); // Outputs: "Buddy speaks."

// const cat = new Cat("Whiskers");
// cat.speak(); // Outputs: "Whiskers speaks."
