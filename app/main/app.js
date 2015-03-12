/**
 * @namespace ar
 * @name mainApp
 *
 * @description
 * The main application module.
 */


var mainApp = angular.module("mainApp",[
	'ngTable',
	'ngResource',
    'ui.router',
    'easypiechart'
]);

mainApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider ) {
    'use strict';

    
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
	
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/login/login.tpl.html',
            controller: 'loginCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.tpl.html',
            controller: 'loginCtrl'
        })
        .state('interview', {
            url: '/interview',
            templateUrl: 'app/interview/interview.tpl.html',
            controller: 'interviewCtrl'
        })
    	.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.tpl.html',
            controller: 'dashboardCtrl'
        })
        .state('enrollment', {
            url: '/enrollment',
            templateUrl: 'app/enrollment/enrollment.tpl.html',
            controller: 'enrollmentCtrl'
        })
        .state('insured', {
            url: '/insured',
            templateUrl: 'app/enrollment/insured.tpl.html',
            controller: 'insuredCtrl'
        })
        .state('owner', {
            url: '/owner',
            templateUrl: 'app/enrollment/owner.tpl.html',
            controller: 'ownerCtrl'
        });

        //Re-directs
        $urlRouterProvider.otherwise('/login');

});
mainApp.run(function ($log, $rootScope, $state, $urlRouter,$location) { // Inject Service to load data
    $log.debug("mainApp.run");
    $state.transitionTo('login');
    
   // $rootScope.$on('$stateChangeStart', ); -- Pass Service.values to load some data

   /* $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        $log.error('State change error: ', error);
    });*/

});
