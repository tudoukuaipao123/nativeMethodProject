function Parent(value) {
  this.value = value;
  this.name = 'parent';
}

Parent.prototype.getValue = function() {
  console.log(this.value);
}

const parent = create(Parent, 11);
console.log('parent', parent);