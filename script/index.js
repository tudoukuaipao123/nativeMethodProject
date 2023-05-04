const promise = new myPromise(function(resolve, reject) {
  console.log('注册promise');
  setTimeout(function() {
    resolve(111);
  }, 5000);
});

promise.then(function(data) {
  console.log(data);
})