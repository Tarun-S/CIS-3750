(function () {
    'use strict';

    angular
        .module('app')
        .controller('PestsController', PestsController);


    PestsController.$inject = ['$scope', '$window'];
    function PestsController($scope)
    {
   
        $scope.submitPests = function($window)
        {
        	$scope.checkBox = '';
        	window.alert('Thank you for your input');
        };

    }
})();