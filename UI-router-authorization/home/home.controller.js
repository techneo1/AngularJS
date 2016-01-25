(function() {
    'use strict';

    angular.module('app.home', [])
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$state', 'principal'];
    function HomeController($scope, $state, principal) {
        $scope.signout = function() {
            principal.authenticate(null);
            $state.go('signin');
        };
    }
})();