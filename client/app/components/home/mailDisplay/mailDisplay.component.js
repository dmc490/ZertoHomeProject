import template from './mailDisplay.html';
import controller from './mailDisplay.controller';
import './mailDisplay.styl';

let mailDisplayComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller:['MailsObserver','LogObserver',controller],
  controllerAs:'vm'
};

export default mailDisplayComponent;
