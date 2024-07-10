class Pet {
  #owner
  static #allPets = []; 

    constructor(name, species) { // do not need a constructor for any class
        this.name = name;
        this.species = species;
        this.#owner = null;
        this.favoriteToy = "string";
        Pet.#allPets.push(this);
    }

    setOwner(owner) {
        this.#owner = owner;
    }

    getOwner() {
        return this.#owner;
    }
    setFavoriteToy(toy) {
        this.favoriteToy = toy;
    };
    getFavoriteToy() {
        return this.favoriteToy;
    }
    static allPets() {
        return [...Pet.#allPets];
    }
}

const tiger = new Pet("Tiger", "cat");
console.log(tiger); // Pet { name: 'Tiger', species: 'cat', #owner: null, favoriteToy: 'string' }

class Person {
    #pets = [];
    static #allPeople = [];

    constructor(name, age, ) {
        this.name = name;
        this.age = age;
        Person.#allPeople.push(this);
    }

    adoptPet(pet) {
        this.#pets.push(pet);
        pet.setOwner(this);
    }

    getPets() {
        return [...this.#pets];
    }

    static allPeople() {
        return [...Person.#allPeople];
    }
}

class PetOwner extends Person {
    constructor(name, age) {
        super(name);
        
    }
}

const petOwner = new PetOwner("John");
console.log(petOwner); // PetOwner { name: 'John' }