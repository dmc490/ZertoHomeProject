import angular from 'angular';
import uiRouter from 'angular-ui-router';
import logScreenComponent from './logScreen.component';
import CommonServices from '../../../common/common';

let logScreenModule = angular.module('logScreen', [
  uiRouter,
  CommonServices
])

.component('logScreen', logScreenComponent)

.name;

export default logScreenModule;
