const angular = require('angular');
const moment = require('moment');
const timeApp = angular.module('timeApp', []);

timeApp.controller('timeController', ['$scope', '$interval', ($scope, $interval) => {
  var currTime;
  var timeZone = parseInt(moment().format('Z'));
  $scope.count = 0;

  $interval(() => {
    currTime = moment(new Date());
    currTime.add($scope.count, 'hours').hours();
    $scope.time = currTime.format('MMMM Do YYYY, h:mm:ss a');
    $scope.timezone = timeZone;
  }, 1000);

  $scope.addHour = () => {
    $scope.count++;
    timeZone++;
  };

  $scope.minusHour = () => {
    $scope.count--;
    timeZone--;
  };
}]);
