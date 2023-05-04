
/**
 * 递归方式深拷贝
 * @param {*} v 它既可以是object 也可以是普通的类型，取决于在哪引用
 */
function deepCopy(v) {
  let newValue = null;
  if (typeof v === 'object' && v !== null) {
    //这里是可深拷贝的数组或对象
    newValue = Object.prototype.toString.call(v) == '[object Array]' ? []:{};
    for(const prop in v) {
      newValue[prop] = deepCopy(v[prop]);
    }
  } else {
    // 这里是基本类型
    newValue = v;
  }
  return newValue
}
