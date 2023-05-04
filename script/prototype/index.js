function Parent(value) {
  this.value = value;
}

Parent.prototype.getValue = function() {
  console.log(this.value);
}

const parent = new Parent(2);

function Child(value) {
  Parent.call(this, value);
}

Child.prototype = parent;

const child = new Child(3);
console.log('child', child);