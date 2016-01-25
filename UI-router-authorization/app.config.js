(function() {
    'use strict';

    angular.module('app', ['ui.router', 'app.home', 'app.login'])
        .config(['$stateProvider', '$urlRouterProvider', config]);

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('site', {
            'abstract': true,
            resolve: {
                authorize: ['authorization',
                    function(authorization) {
                        return authorization.authorize();
                    }
                ]
            }
        }).state('home', {
            parent: 'site',
            url: '/',
            data: {
                roles: ['User']
            },
            views: {
                'content@': {
                    templateUrl: 'home/_home.tmpl.html',
                    controller: 'HomeController'
                }
            }
        }).state('signin', {
            parent: 'site',
            url: '/signin',
            data: {
                roles: []
            },
            views: {
                'content@': {
                    templateUrl: 'login/_signin.tmpl.html',
                    controller: 'LoginController'
                }
            }
        }).state('restricted', {
            parent: 'site',
            url: '/restricted',
            data: {
                roles: ['Admin']
            },
            views: {
                'content@': {
                    templateUrl: 'login/_restricted.tmpl.html'
                }
            }
        }).state('accessdenied', {
            parent: 'site',
            url: '/denied',
            data: {
                roles: []
            },
            views: {
                'content@': {
                    templateUrl: 'login/_denied.tmpl.html'
                }
            }
        });
    }

})();
