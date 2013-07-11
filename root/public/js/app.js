'use strict';

var app = angular.module('Demo', []);

app.controller('AppCtrl', ['$scope', function ($scope) {
    $scope.welcome = 'Welcome!!!';
}]);
