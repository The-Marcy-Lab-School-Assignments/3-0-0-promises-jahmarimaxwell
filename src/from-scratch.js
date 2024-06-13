const resolvedWrapper = (val) => {
  return Promise.resolve(val);
  // using '.resolve' to return resolved
  // promise value
};

const rejectedWrapper = (str) => {
  const promise = () => new Promise((resolve, reject) => {
    reject(Error(str));
    // return Promise.reject(str);
  })
  return promise;
  // used 'new promise' method to return 
  // rejected string
};

const handleResolvedPromise = (promise) => {
  return promise.then((data) => { // executes if `resolve()` was invoked
    console.log(data);
    return data;
  })
  // using '.then' it will grab the result of the promise
  // log the result to the console and also return the result
}

function handleResolvedOrRejectedPromise(promise) {
  // promise is resolved, log the resolved result
  return promise.then(
    (resolved) => {
      console.log(resolved);
      return resolved;
    }
  )
    // catch the rejected result of the promise
    .catch(
      (rejected) => {
        console.error(`Your error message was: ${rejected.message}`);
        // 'console.error' logs the error
        return null;
      }
    );
}
const pauseForMs = (MilliSec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, MilliSec)
  })
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
