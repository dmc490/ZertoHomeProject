import template from './mailInput.html';
import controller from './mailInput.controller';
import './mailInput.styl';

let mailInputComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller:['MailsObserver','LogObserver',controller],
  controllerAs: 'vm'
};

export default mailInputComponent;
