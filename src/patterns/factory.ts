// Problem solved - extensibility
// Your code depends on Class Truck, all your function expect Truck. But later you need to start supporting Buses. Issue will occur since every where you are using Trucks
// i.e. Your code is tightly coupled with current implementation, so extensibilty is an issue
// To solve this, we can use factory pattern from the beginning.
// 1. All options will follow a single interface (your code will depend on this) (dependency inversion)
interface Vehicle {
  park(): string;
}

// One of the implementation of Transport
class Truck implements Vehicle {
  public park(): string {
    return "Truck parked";
  }
}

// Another implementation of Transport
class Bus implements Vehicle {
  public park(): string {
    return "Bus parked";
  }
}

// Creator class (independent of Bus or Truck)
abstract class VehicleCreator {
  public abstract vehicleFactory(): Vehicle; // Factory to create the Vehicle -> to be overloaded by implementation of the Vehicle Creator

  public park(): string {
    const vehicle = this.vehicleFactory();
    return `${vehicle.park()}`;
  }
}

// Implementation of VehicleCreator to create Truck
class TruckCreator extends VehicleCreator {
  public vehicleFactory(): Vehicle {
    return new Truck();
  }
}

// Implementation of VehicleCreator to create Bus
class BusCreator extends VehicleCreator {
  public vehicleFactory(): Vehicle {
    return new Bus();
  }
}

function parkVehicle(creator: VehicleCreator) {
  console.log(creator.park());
}

parkVehicle(new TruckCreator());

parkVehicle(new BusCreator());
