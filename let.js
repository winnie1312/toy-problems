let menu ={
  _courses : {
    _appetizers : [],
    _mains : [],
    _desserts : [],

    set appetizersA (appetizersIn) {

  	},
    get appetizersA () {

  	},
  	set mainsA (mainsIn) {

    },
    get mainsA () {

    },

    set dessertsA (dessertsIn) {

    },
    get dessertsA () {

    }


  },

  get coursesA () {
    return {
      appetizersA : this._appetizers,
      mainsA : this._mains,
      dessertsA : this._desserts
    }
  },

    addDishToCourse(courseName, dishName, dishPrice) {
    	const dish = {
        name: courseName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },

	getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
  },
  generateRandomMeal() {
    const appetizerA = getRandomDishFromCourse("appetizers");
    const mainA = getRandomDishFromCourse("mains");
    const dessertA = getRandomDishFromCourse("desserts");
    const totalPrice = appetizer*price + main*price + dessert*price;
    return `your meal is ${appetizerA.name}, ${mainA.name}, ${dessertA.name}, the price is $${totalPrice}.`;
  }

};

menu.addDishToCourse("appetizers", "b", 2.5);
menu.addDishToCourse("mains", "c", 5);
menu.addDishToCourse("desserts", "e", 2);

let meal = menu.generateRandomMeal();
console.log(meal);
