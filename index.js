//1
let restaurantName = "JS-Doner"; 
const isOpen = true;
let chefName = "Yernar";
let numOfTables = 1;
let hasOutdoorSeating = undefined;
let dailySpecial = null;

let menu = {
  appetizers: ["Doner Chiken", "Doner Beef"],
};

menu.drinks = ["Cola", "Gorilla","Turkish ayran"];

delete menu.appetizers;
let category = "drinks";
let dish = menu[category][0];

console.log(restaurantName);
console.log(isOpen);
console.log(chefName);
console.log(numOfTables);
console.log(hasOutdoorSeating);
console.log(dailySpecial);
console.log(menu);

//2
let vehicle = {
    name: 'BMW',
    model1: 'X5',
    'model': 'M1'
};
delete vehicle['model'];
console.log(vehicle)

//3
let salaries = {
  Aroo: 100,
  Dalida: 160,
  Samat: 130
};

let totalSalary = 0;

for (let employee in salaries) {
  totalSalary += salaries[employee];
}

console.log("Общая сумма зарплат:", totalSalary);
