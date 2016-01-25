(function() {
    'use strict';

    angular.module('app.login', [])
        .controller('LoginController', LoginController)

    LoginController.$inject = ['$scope', '$state', 'principal'];
    function LoginController($scope, $state, principal) {
        $scope.signin = function() {

            // here, we fake authenticating and give a fake user
            principal.authenticate({
                name: 'Test User',
                roles: ['User']
            });

            if ($scope.returnToState) $state.go($scope.returnToState.name, $scope.returnToStateParams);
            else $state.go('home');
        };
    }
})();