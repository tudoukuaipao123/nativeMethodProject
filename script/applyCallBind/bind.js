Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw TypeError('Error');
  }
  const fn = this;
  context = context || window;
  context.fn = fn;
  const args = [...arguments].slice(1);

  return function() {
    const result = context.fn(...args);
    delete context.fn;
    return result;
  } 

}