/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};


function showObjectKeys(audi) {
  const audiArray = [];
  for (let car in audi) {
    audiArray.push(car);
  }
  return audiArray
}
console.log(showObjectKeys(audi))