import angular from 'angular';
import MailsObserver from './mails.observer';

let mailsModule = angular.module('mails', [])

.factory('MailsObserver', MailsObserver)

.name;

export default mailsModule;
