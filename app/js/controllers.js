'use strict';

/* Controllers */

var weightsApp = angular.module('weightsApp', []);

weightsApp.controller('weightsController', function($scope) {
  $scope.weightsList = [
    {'date': 1394496929115,
     'weight': 83}
  ];
});
			