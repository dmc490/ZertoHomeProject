import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import mailInput from './mailInput/mailInput';
import mailDisplay from './mailDisplay/mailDisplay';
import logScreen from './logScreen/logScreen';


let homeModule = angular.module('home', [
  uiRouter,
  mailInput,
  mailDisplay,
  logScreen
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
