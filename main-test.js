const menu ={
  _courses : {

    _mains : [],

    get mainsA () {
      return this._mains;
    },

  	set mainsA (mainsIn) {

    },
  },

  get coursesA () {
    return {
      mainsA : this._courses.mainsA,
    }
  },
  //add Dish to course function
    addDishToCourse(courseName, dishName, dishPrice) {
    	const dish = {
        name: courseName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },
// get dish from course function
	getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    return randomIndex;
  },
  generateRandomMeal() {
    const mainsA = this.getRandomDishFromCourse('mainsA');
    const totalPrice =  this._courses._mains[mainsA].price ;
    return `your meal is ${this._courses._mains[mainsA].name} the price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('mainsA', "salad", 5);

let meal = menu.generateRandomMeal();
console.log(meal);
