mainApp.controller('interviewCtrl', function ($scope, $rootScope, $log, $state, $stateParams) {
    'use strict';

    $log.info('+ interviewCtrl()');
    $scope.test="ANGULAR TEST";
    $scope.started = false;
    $scope.named = false;
    $scope.option1 = false;
    $scope.username="";

    $scope.showOptions = function(){
    	$state.go("enrollment");
    }
});