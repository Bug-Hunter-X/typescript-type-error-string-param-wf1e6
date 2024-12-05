function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution 1: Iterate through the array
user.forEach(name => {
  console.log(greeter(name));
});

// Solution 2: Use a type that accommodates strings or arrays
function greeter2(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

console.log(greeter2(user));
console.log(greeter2("Jane User"));