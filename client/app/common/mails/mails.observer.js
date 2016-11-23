let MailsObserver = function () {
  let subscribers = [];

  let subscribe = (callback) => {
    console.log('subscribing to mail service')
    if (subscribers.indexOf(callback) === -1) {
      subscribers.push(callback)
    }
  };

  let update = (mail) => {
    console.log('updating mail')
    subscribers.forEach((func)=>{
      if (func instanceof Function){
        func(mail)
      }
    })
  };

  let unsubscribe = (func) => {
    let index = subscribers.indexOf(func)
    if (subscribers.indexOf(func) !== -1) {
      subscribers.splice(index,1)
    }
  };

  return {subscribe ,unsubscribe, update };
};

export default MailsObserver;
