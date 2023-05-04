function Parent(value) {
  this.value = value;
}

Parent.prototype.getValue = function() {
  console.log(this.value);
}

function Child(value) {
  Parent.call(this, value)
}

Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    writable: true,
    enumerable: false,
    configurable: false,
  },
  p: { value: 24 }
});

const child = new Child(5);
console.log(child);