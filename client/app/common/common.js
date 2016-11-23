import angular from 'angular';
import LogObserver from './log/log';
import MailsObserver from './mails/mails';


let commonModule = angular.module('app.common', [
  LogObserver,
  MailsObserver
])

.name;

export default commonModule;
