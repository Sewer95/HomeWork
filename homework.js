// ### Задание 1
//  У вас есть массив объектов:
// ```
// const cars = [
//     { brand: "BMW", price: 20000, isDiesel: true },
//     { brand: "Mercedes", price: 22000, isDiesel: false },
//     { brand: "Porshe", price: 50000, isDiesel: true },
//     { brand: "Nissan", price: 25000, isDiesel: false },
// ];
// ```
// Создайте на основе старого массива новый массив объектов по образу:
// [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const newCars = cars.map(car => {
    return {brand: car.brand, isDiesel: car.isDiesel}
}); 
console.log(newCars);

// ### Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const dieselCars = cars.filter(car => car.isDiesel);
console.log(dieselCars);

// ### Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const gasCars = cars.filter(car => ! car.isDiesel);
console.log(gasCars);

// ### Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем. 

const sumGas = cars.reduce((sum, car)=>{
    if (!car.isDiesel){
        return sum + car.price;
    } else {
        return sum;
    }
}, 0);
console.log(sumGas);

// ### Задание 5
// Повысьте цену всех машин в массиве на 20%.

const pricesCars = cars.map(car => car.price * 1.2)
console.log(pricesCars);

// ### Задание 6 
// Создайте новый массив, где все дизельные машины заменены на 
// `{ brand: "Tesla", price: 25000, isDiesel: false }`

const updatedCars = cars.map (car => {
    if (car.isDiesel){
        return{brand: "Tesla", price: 25000, isDiesel: false}
    } else {
        return car;
    }
})
console.log(updatedCars);

