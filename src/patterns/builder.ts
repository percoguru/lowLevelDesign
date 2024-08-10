// Builder helps construct complex objects step by step
// Helps avoid too many parameter in the constructor, because of multiple permutation on the type of product to be created
// Example ->
// A car company sells a car, in multiple variants. And a car condigurator app which you can use to customise the car

interface Builder {
  produceCustomColourSeats(color: string): void;
  produceStandardSeats(): void;
}

class Car {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Car parts: ${this.parts.join(", ")}\n`);
  }
}

class CarBuilder implements Builder {
  private car?: Car;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.car = new Car();
  }

  public produceCustomColourSeats(color: string): void {
    this.car?.parts.push(`${color} Coloured Seats`);
  }

  public produceStandardSeats(): void {
    this.car?.parts.push(`Standard black seats`);
  }

  public getCar(): Car {
    const result = this.car || new Car();
    this.reset();
    return result;
  }
}

class Director {
  private builder?: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildStandardCar(): void {
    this.builder?.produceStandardSeats();
  }

  public buildCustomCar(): void {
    this.builder?.produceCustomColourSeats("blue");
  }
}

function clientCode(director: Director) {
  const builder = new CarBuilder();
  director.setBuilder(builder);

  console.log("Standard basic car:");
  director.buildStandardCar();
  builder.getCar().listParts();

  console.log("Standard full featured product:");
  director.buildCustomCar();
  builder.getCar().listParts();
}

const director = new Director();
clientCode(director);
