import angular from 'angular';
import LogObserver from './log.observer';

let logModule = angular.module('log', [])

.factory('LogObserver', LogObserver)

.name;

export default logModule;
