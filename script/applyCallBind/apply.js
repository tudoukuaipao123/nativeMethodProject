Function.prototype.myCall = function(context) {
  // 核心思路就是把上下文看做一个对象，把调用的方法放到这个上下文里执行，this只想自然就变成了该上下文, 然后再把放入其中的方法删掉
  if (typeof this !== 'function') {
    throw TypeError('Error');
  }

  context = context || window;
  context.fn = this;
  const args = [...arguments][1];
  let result = null;
  if (args) {
    result = context.fn(args);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}