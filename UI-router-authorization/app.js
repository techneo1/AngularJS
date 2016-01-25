(function() {
    'use strict';

    angular.module('app')
        .run(['$rootScope', '$state', '$stateParams', 'authorization', 'principal', run])

    function run($rootScope, $state, $stateParams, authorization, principal) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;

            if (principal.isIdentityResolved()) authorization.authorize();
        });
    }
})();