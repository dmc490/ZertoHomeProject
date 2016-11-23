import MailDisplayModule from './mailDisplay'
import MailDisplayController from './mailDisplay.controller';
import MailDisplayTemplate from './mailDisplay.html';

describe('MailDisplay', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MailDisplayModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = (mailsObserver,logObserver) => {
      return new MailDisplayController(mailsObserver,logObserver);
    };
  }));

  describe('Controller', () => {
    let MockMailsObserver = {
      subscribe:()=>{},
      update:()=>{},
    }
    let MockLogObserver = {
      subscribe:()=>{},
      update:()=>{},
    }

    it('has a mails property', () => {
      let controller = makeController(MockMailsObserver,MockLogObserver);
      expect(controller).to.have.property('mails');
    });

    it('remove mail from list', () => {
      let controller = makeController(MockMailsObserver,MockLogObserver);
      controller.mails = ['a@a.com']
      let indexToRemove = 0
      controller.removeMail(indexToRemove)
      expect(controller.mails.length).to.equal(0);
    });


  });

  describe('Template', () => {
    // template specs
    it('has vm.mails in template', () => {
      expect(MailDisplayTemplate).to.match(/vm\.mails/);
    });
    it('email and function headers', () => {
      expect(MailDisplayTemplate).to.match(/<th>Email<\/th>/);
      expect(MailDisplayTemplate).to.match(/<th>Function<\/th>/);
    });
  });

});
