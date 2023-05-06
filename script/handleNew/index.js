/**
 * 
 * @param {一个方法} fn 
 * @returns 
 */
// 第一版
function create(fn){
  // 创建一个空对象 这个其实就是实例对象
  var obj = {};
  // 获得构造函数，argumengts中除去第一个参数  因为第一个 参数是要实例的函数  就是拿到构造函数
  // 注意：这是一个更改arguments的操作，shift之后 arguments的第一个参数已经改成了正常传入的参数，而不是fn
  Con = [].shift.call(arguments); 
  // 链接到原型，obj可以访问到构造函数中的属性  把实例对象的原型指向构造函数的原型
  obj.__proto__ = Con.prototype;
  // 绑定this  实现继承， 最后将构造函数的this  指向obj
  Con.apply(obj, arguments);
  
  return obj
}
