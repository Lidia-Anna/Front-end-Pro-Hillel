const pet = {
  name: 'Leo',
  greet(greeting, question) {
    console.log(`${greeting}, my name is ${this.name}. ${question}`);
  },
};
const myBind = function (func, context, args) {
  return function (newArgs) {
    context.tempFunc = func;
    const result = context.tempFunc(args, newArgs);
    delete context.tempFunc;
    return result;
  };
};
const greetPet = myBind(pet.greet, pet, 'Hello');
greetPet('How are you?');
