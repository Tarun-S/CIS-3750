(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResourceController', ResourceController);

    ResourceController.$inject = ['$scope'];
    function ResourceController($scope) 
    {
        $scope.test = "FUCK THIS";
        $scope.someFunction = function()
        {
            console.log("is this working");
        };
    }   
})();