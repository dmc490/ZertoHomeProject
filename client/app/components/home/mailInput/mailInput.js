import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mailInputComponent from './mailInput.component';
import CommonServices from '../../../common/common';

let mailInputModule = angular.module('mailInput', [
  uiRouter,
  CommonServices
])

.component('mailInput', mailInputComponent)

.name;

export default mailInputModule;
