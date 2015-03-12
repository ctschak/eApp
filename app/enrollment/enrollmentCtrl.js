mainApp.controller('enrollmentCtrl', function ($scope, $rootScope, $log, $state, $stateParams) {
    'use strict';

    $log.info('+ enrollmentCtrl()');
    $scope.test="ANGULAR TEST";
    $scope.percent = 50;
    $scope.options = {
        easing: 'easeOutBounce',
        barColor: 'rgba(255,255,255,0.75)',
       // barColor: 'red',
        trackColor: 'rgba(0,0,0,0.3)',
        scaleColor: 'rgba(255,255,255,0.3)',
        lineCap: 'square',
        lineWidth: 4,
        size: 100,
        animate: 3000,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
        
    };

    $scope.showInsured = function(){
        $state.go("insured");
    }
    $scope.showOwner = function(){
        $state.go("owner");
    }
    //Demo
   /* $scope.options = {
        animate:{
            duration:0,
            enabled:false
        },
        barColor:'#2C3E50',
        scaleColor:false,
        lineWidth:20,
        lineCap:'circle'
        
    };*/
});