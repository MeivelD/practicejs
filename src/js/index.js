class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

mycar = new Car("Ferrari");

document.getElementById("demo").innerHTML = mycar.carname;