
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function myPromise (fn) {
  const self = this;

  this.state = PENDING;
  this.resolveCallback = [];
  this.rejectCallback = [];
  this.value = null;

  function resolve(value) {
    if (self.state === PENDING) {
      self.state = RESOLVED;
      self.value = value;
      self.resolveCallback.map(fn => fn(value));
    }
  }

  function reject(value) {
    if (self.state === PENDING) {
      self.state = REJECTED;
      self.state = value;
      self.rejectCallback.map(fn => fn(value));
    }

  }

  try {
    fn(resolve, reject)
  } catch(e) {
    reject(e);
  }

}

myPromise.prototype.then = function(onFulfilled, onRejected) {
  if (this.state == PENDING) {
    this.resolveCallback.push(onFulfilled);
    this.rejectCallback.push(onRejected);
  }

  if (this.state == RESOLVED) {
    onFulfilled(this.value);
  }

  if (this.state == REJECTED) {
    onRejected(this.value);
  }

}