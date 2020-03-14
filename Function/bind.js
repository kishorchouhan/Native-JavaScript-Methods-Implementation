let name = {
  firstName: 'Kishor',
  lastName: 'Chouhan'
};

let printBio = function(city, state, country) {
  console.log(
    `${this.firstName} ${this.lastName}, ${city}, ${state}, ${country}`
  );
};

Function.prototype.myBind = function(...arg) {
  let obj = this;
  return function(...arg2) {
    obj.apply(arg[0], [...arg.slice(1), ...arg2]);
  };
};

let printBioData = printBio.myBind(name, 'Pune', 'Maharashtra');
printBioData('India');
