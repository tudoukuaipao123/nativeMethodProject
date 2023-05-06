/**
 * 实现async/await 
 * 总体思路就是把generate和promise结合起来，generate每次next完以后，obj.value为返回值
 * 如果obj.value为promise，则可以一次放在promise.then里进行回调保证它的顺序，
 * 最后通过co方法，将回调递归，将最后一个return调，终止回调
 */

// const fn = async function(num) {
//   // 这里return出去的后，会生成一个fulfilled(num) {},这个方法被包裹在Promise里 就是后面.then方法里传的
//   return num
// }
// const promise = fn(10)
// console.log('promise', promise);
// promise.then(data => {
//   console.log('data',data);
// })


function fn(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 100*num);
  })
}
function* gen() {
  const p1 = yield fn(3);
  console.log('p1', p1);
  const p2 = yield fn(2);
  console.log('p2', p2);
  const p3 = yield fn(1);
  console.log('p3', p3);
  return fn(4);
}

const g = gen();
function co(g, nobj) {
  let nextObj = nobj;
  if (!nextObj){
    nextObj = g.next();
  }
  if (nextObj.done) return;
  nextObj.value.then((data) => {
    // 这里 g.next(data)的data是反出去，让p1,p2,p3接收到的
    const nobj = g.next(data);
    co(g,nobj);
  })
}

co(g);

// const g = gen();
// const next1 = g.next();
// const next2 = g.next();
// const next3 = g.next();
// const next4 = g.next();
// console.log('next1', next1);

// next1.value.then(data => {
//   console.log('data', data);
//   next2.value.then(data => {
//     console.log('data', data);
//     next3.value.then(data => {
//       console.log('data', data);
//       next4.value.then(data => {
//         console.log('data', data);
//       })
//     })
//   })
// })