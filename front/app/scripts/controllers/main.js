'use strict';

/**
 * @ngdoc function
 * @name myhutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myhutApp
 */
angular.module('myhutApp')
  .controller('MainCtrl', function ($scope) {
	   $scope.test = 'test';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
