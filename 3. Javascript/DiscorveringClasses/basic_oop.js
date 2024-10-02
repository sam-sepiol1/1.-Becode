class OrangeTree {
    constructor() {
        this.age = 0;
        this.height = 0;
        this.fruits = 0;
    }

    chancesOfDeath = 0;

    oneYearPasses() {
        if (this.isDead()) {
            console.log("The tree is dead");
        } else {
            if (this.age < 10) {
                this.height++;
            }
            this.age++;

            this.produceFruits();

            if (this.age >= 50) {
                this.chancesOfDeath += 2;
            }
        }
    }

    isDead() {
        if (this.age >= 100) {
            return true;
        } else if (this.age >= 50 && Math.floor(Math.random() * 100 + 1) > this.chancesOfDeath) {
            return true;
        } else {
            return false;
        }
    }

    produceFruits() {
        if (this.age > 5 && this.age < 10) {
            this.fruits = 100;
        } else if (this.age >= 10 && this.age < 15) {
            this.fruits = 200;
        } else {
            this.fruits = 0;
        }
    }

    measureHeight() {
        console.log(this.height);
        return this.height;
    }

    pickAFruit() {
        if (this.fruits === 0) {
            console.log("No fruits to pick");
            return "No fruits to pick";
        } else {
            this.fruits -= 1;
        }
    }
}

module.exports = OrangeTree; // Export the class for testing