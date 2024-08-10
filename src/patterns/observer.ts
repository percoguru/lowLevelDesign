// Sharing information/updates with multiple subscriber
// Addition and deletion of subscriber

// First an interface for the publisher
interface Publisher {
  attach(observer: Observer): void;

  detach(observer: Observer): void;
}

// Defining the Observer interface
interface Observer {
  update(publisher: Publisher): void;
}

class ConcretePublisher implements Publisher {
  public state: number = 2;

  private observers: Observer[] = [];

  attach(observer: Observer): void {
    const doesExist = this.observers.includes(observer);
    if (doesExist) {
      return console.log("Publisher: Observer already exists");
    }

    console.log("Publisher: Attaching an observer");
    this.observers.push(observer);
  }
  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Subject: Detached an observer.");
  }

  public notify(): void {
    console.log("Publisher: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public someBusinessLogic(): void {
    console.log("\nSubject: I'm doing something important.");
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}

/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */
class ConcreteObserverA implements Observer {
  public update(subject: Publisher): void {
    if (subject instanceof ConcretePublisher && subject.state < 3) {
      console.log("ConcreteObserverA: Reacted to the event.");
    }
  }
}

class ConcreteObserverB implements Observer {
  public update(subject: Publisher): void {
    if (
      subject instanceof ConcretePublisher &&
      (subject.state === 0 || subject.state >= 2)
    ) {
      console.log("ConcreteObserverB: Reacted to the event.");
    }
  }
}

const subject = new ConcretePublisher();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();
