const menu = {
_courses: {
_appetizers: [],
_mains: [],
_desserts: [],
    set appetizers (appetizer) {
        this._appetizers.push(appetizer);
    },
    set mains (main) {
        this._mains.push(main);
    },
    set desserts (dessert) {
        this._desserts.push(dessert);
    },
    get appetizers () {
        return this._appetizers;
    },
    get mains () {
        return this._mains;
    },
    get desserts () {
        return this._desserts;
    }
},
    get courses () {
        return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
        }
    },
    addDishToCourse (courseName, dishName, dishPrice) {
        const dish = {
        name: dishName,
        price: dishPrice
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse (courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal () {
        const appetizer = this.getRandomDishFromCourse("appetizers");
        const main = this.getRandomDishFromCourse("mains");
        const dessert = this.getRandomDishFromCourse("desserts");
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. Your total is $${totalPrice}.`
    }
}


menu.addDishToCourse("appetizers", "samosa", 4.50);
menu.addDishToCourse("appetizers", "pakora", 3.00);
menu.addDishToCourse("appetizers", "popadom", 2.00);

menu.addDishToCourse("mains", "korma", 10.00);
menu.addDishToCourse("mains", "butter Chicken", 11.00);
menu.addDishToCourse("mains", "panner", 7.00);

menu.addDishToCourse("desserts", "jalebi", 2.00);
menu.addDishToCourse("desserts", "barfi", 3.00);
menu.addDishToCourse("desserts", "lassi", 2.50);

//let meal = //menu.generateRandomMeal();
//console.log(meal);

console.log(menu.courses)

console.log(menu.generateRandomMeal());