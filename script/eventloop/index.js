
setImmediate(function() {
  console.log(1);
});
setTimeout(function() {
  console.log(2);
});

var a = setInterval(function() {
  console.log(9);
  clearInterval(a);
})




new Promise(function(resolve) {
  console.log(3);
  resolve();
  console.log(4);
}).then(function() {
  console.log(5);
  console.timeEnd('start')
});

console.log(6);

process.nextTick(function() {
  console.log(7);
});

console.log(8);