function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    console.log("".concat(greeting, ",").concat(name));
}
greet("Bob");
