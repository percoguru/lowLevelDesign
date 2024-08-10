// Need - Creating multiple related objects (one family) from a single factory
// Your app needs family of products based on certain scenarios

// First type of product
interface Button {
  paint(): string;
}

// Second type of product
interface CheckBox {
  paint(): string;
}

// Button for Windows Family
class WinButton implements Button {
  paint(): string {
    return "Windows Button";
  }
}

// Button for Mac family
class MacButton implements Button {
  paint(): string {
    return "Mac Button";
  }
}

// Check Box for Windows Family
class WinCheckBox implements CheckBox {
  paint(): string {
    return "Windows Check Box";
  }
}

// Check Box for Mac Family
class MacCheckBox implements CheckBox {
  paint(): string {
    return "Mac Check Box";
  }
}

// Now we need a factory using which I can create all products of a single family

// Abstract factory
interface GUIFactory {
  createButton(): Button;
  createCheckBox(): CheckBox;
}

class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }
  createCheckBox(): CheckBox {
    return new WinCheckBox();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckBox(): CheckBox {
    return new MacCheckBox();
  }
}

class Application {
  private factory: GUIFactory;
  private button?: Button;

  constructor(factory: GUIFactory) {
    this.factory = factory;
  }

  createUI() {
    this.button = this.factory.createButton();
    // console.log()
  }

  paint() {
    console.log(this.button?.paint());
  }
}

const winFactory = new WinFactory();

const app = new Application(winFactory);

app.createUI();
app.paint();
