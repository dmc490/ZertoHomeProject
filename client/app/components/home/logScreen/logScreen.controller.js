class LogScreenController {
  constructor(LogObserver) {
    this.actions = []
    LogObserver.subscribe((action)=>{
      console.log('got the action',action)
      this.actions.push(action)
    })
  }
}

export default LogScreenController;
