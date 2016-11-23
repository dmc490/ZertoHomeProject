import template from './logScreen.html';
import controller from './logScreen.controller';
import './logScreen.styl';

let logScreenComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller:['LogObserver',controller],
  controllerAs:'vm'
};

export default logScreenComponent;
