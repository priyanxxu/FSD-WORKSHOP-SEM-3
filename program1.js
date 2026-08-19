class CustomEventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName].forEach((callback) => callback(...args));
  }
}

const emitter = new CustomEventEmitter();

emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.on("exit", () => {
  console.log("Program exited.");
});

emitter.emit("greet", "Meow");
emitter.emit("exit");
