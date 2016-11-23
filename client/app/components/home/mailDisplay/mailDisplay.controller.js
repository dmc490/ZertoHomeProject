class MailDisplayController {
  constructor(MailsObserver,LogObserver) {
    this.name = 'mailDisplay';
    this.mails = [];
    MailsObserver.subscribe((mail)=>{
      console.log('got the mail',mail)
      this.mails.push(mail)
    })
    this.LogObserver = LogObserver
  }

  removeMail(index){
    this.LogObserver.update(`deleted the mail ${this.mails[index]}`)
    this.mails.splice(index,1)
  }

}

export default MailDisplayController;
