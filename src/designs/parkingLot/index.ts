class Vehicle {
  type: string;
}

enum VehicleType {
  twoWheeler = "twoWheeler",
  fourWheeler = "fourWheeler",
}

interface PaymentStrategy {
  calculatePayment(startTime: Date, endTime: Date): number;
}

class TwoWheelerPaymentStrategy implements PaymentStrategy {
  private strategy: TwoWheelerPaymentStrategy;

  constructor() {
    if (!this.strategy) {
      this.strategy = new TwoWheelerPaymentStrategy();
    }
    return this.strategy;
  }

  calculatePayment(startTime: Date, endTime: Date): number {
    return 10 * (endTime.getTime() - startTime.getTime());
  }
}

class FourWheelerPaymentStrategy implements PaymentStrategy {
  private strategy: FourWheelerPaymentStrategy;

  constructor() {
    if (!this.strategy) {
      this.strategy = new FourWheelerPaymentStrategy();
    }
    return this.strategy;
  }

  calculatePayment(startTime: Date, endTime: Date): number {
    return 20 * (endTime.getTime() - startTime.getTime());
  }
}

interface TicketFactory {
  createTicket(vehicle: Vehicle): Ticket;
}

class FourWheelerTicketFactory implements TicketFactory {
  createTicket(vehicle: Vehicle): Ticket {
    return new Ticket(new Date(), new FourWheelerPaymentStrategy(), vehicle);
  }
}

class TwoWheelerTicketFactory implements TicketFactory {
  createTicket(vehicle: Vehicle): Ticket {
    return new Ticket(new Date(), new TwoWheelerPaymentStrategy(), vehicle);
  }
}

abstract class entranceGate {
  parkings: any[];
  ticketFactory: TicketFactory;

  generateTicket(vehicle: Vehicle): Ticket {
    return this.ticketFactory.createTicket(vehicle);
  }
}

class TwoWheelerEntranceGate {
  parkings: any[];
  ticketFactory: TicketFactory = new TwoWheelerTicketFactory();
}

class FourWheelerEntranceGate {
  parkings: any[];
  ticketFactory: TicketFactory = new FourWheelerTicketFactory();
}

class Ticket {
  private paymentStrategy: PaymentStrategy;
  startTime: Date;
  vehicle: Vehicle;

  constructor(
    startTime: Date,
    paymentStrategy: PaymentStrategy,
    vehicle: Vehicle
  ) {
    this.startTime = startTime;
    this.paymentStrategy = paymentStrategy;
    this.vehicle = vehicle;
  }

  setPaymentStrategy(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setStartTime(time: Date) {
    this.startTime = time;
  }

  calculatePayment() {
    return this.paymentStrategy.calculatePayment(this.startTime, new Date());
  }
}

// const t = new Ticket();

// const vehicleId = t.vehicleId;

class Paymentn {
  private paymentStrategy: PaymentStrategy;
  private ticket: Ticket;

  constructor(ticket: Ticket) {
    this.ticket = ticket;
  }

  setPaymentStrategy(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }
}

class PaymentStrategyFactory {
  getPaymentStrategy(vehicle: Vehicle): PaymentStrategy {
    if (vehicle.type === VehicleType.fourWheeler) {
      return new FourWheelerPaymentStrategy();
    } else {
      return new TwoWheelerPaymentStrategy();
    }
  }
}

class ExitGate {
  paymentStrategyFactory: PaymentStrategyFactory = new PaymentStrategyFactory();
  calculatePayment(ticket: Ticket) {
    // ticket.setPaymentStrategy()
    ticket.calculatePayment();
  }

  generatePayment(ticket: Ticket) {
    const payment = new Paymentn(ticket);

    const strategy = this.paymentStrategyFactory.getPaymentStrategy(
      ticket.vehicle
    );

    return strategy.calculatePayment(ticket.startTime, new Date());

    //   payment.setPaymentStrategy()
  }
}
