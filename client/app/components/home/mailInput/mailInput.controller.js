class MailInputController {
  constructor(MailsObserver,LogObserver) {
    this.name = 'mailInput';
    this.mail = '';
    this.MailsObserver = MailsObserver
    this.LogObserver = LogObserver
  }
  addMail(){
    this.LogObserver.update(`Added the mail ${this.mail}`)
    this.MailsObserver.update(this.mail)
    this.mail = '';
  }
}

export default MailInputController;
