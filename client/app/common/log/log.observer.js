let LogObserver = function () {
  let subscribers = [];

  let subscribe = (callback) => {
    if (subscribers.indexOf(callback) === -1) {
      subscribers.push(callback)
    }
  };

  let update = (msg) => {
    subscribers.forEach((func)=>{
      if (func instanceof Function){
        func(msg)
      }
    })
  };

  let unsubscribe = (func) => {
    let index = subscribers.indexOf(callback)
    if (subscribers.indexOf(callback) !== -1) {
      subscribers.splice(index,1)
    }
  };

  return {subscribe ,unsubscribe, update };
};

export default LogObserver;
