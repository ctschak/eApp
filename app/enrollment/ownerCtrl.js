mainApp.controller('ownerCtrl', function ($scope, $rootScope, $log, $state, $stateParams) {
    'use strict';

    $log.info('+ ownerCtrl()');
    $scope.test="ANGULAR TEST";
   // alpacaInsured
    $scope.saveOwner = function(){
    	alert("hi");
    };
   
});