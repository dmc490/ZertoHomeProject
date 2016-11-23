import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mailDisplayComponent from './mailDisplay.component';
import CommonServices from '../../../common/common';

let mailDisplayModule = angular.module('mailDisplay', [
  uiRouter,
  CommonServices
])

.component('mailDisplay', mailDisplayComponent)

.name;

export default mailDisplayModule;
