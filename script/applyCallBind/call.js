Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw TypeError('Error');
  }
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;

}