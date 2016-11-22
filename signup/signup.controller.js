(function () {
    'use strict';

    angular
        .module('app')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$scope', '$location', 'UserService'];
    function SignupController($scope, $location, UserService) 
    {
        var northern = ['', 'Chitipa', 'Karonga', 'Likoma', 'Mzimba', 'Nkhata Bay', 'Rumphi'];
        var central = ['', 'Dedza', 'Dowa', 'Kasungu', 'Lilongwe', 'Mchinji', 'Nkhotakota', 'Ntcheu', 'Ntchisi', 'Salima'];
        var southern = ['', 'Balaka', 'Blantyre', 'Chikwawa', 'Chiradzulu', 'Machinga', 'Mangochi', 'Mulanje', 'Mwanza', 'Nsanje', 'Thyolo', 'Phalombe', 'Zomba', 'Neno'];

        $scope.username = null;
        $scope.password = null;
        $scope.passwordConf = null;
        $scope.firstName = null;
        $scope.lastName = null;
        $scope.birthYear = null;
        $scope.selectedRegion = null;
        $scope.selectedDistrict = null;   

        $scope.submitUser = function()
        {
            console.log("username: ", $scope.username, " password: ", $scope.password);
            UserService.create({ username: $scope.username, password: $scope.password });
        };

        $scope.getRegions = function()
        {
            var list = ['', 'Central Malawi', 'Northern Malawi', 'Southern Malawi'];
            return list
        };
  
        $scope.filterDistricts = function()
        {
            var list = []
            if ($scope.selectedRegion !== '')
            {
                if ($scope.selectedRegion == "Northern Malawi")
                {
                    list = northern;
                }
                else if ($scope.selectedRegion == "Central Malawi")
                {
                    list = central;
                }
                else if ($scope.selectedRegion == "Southern Malawi")
                {
                    list = southern;
                }
            }
            return list;
        };

        $scope.CreateUser = function()
        {
            var user = { username: $scope.username, password: $scope.password }
            UserService.Create(user);
        }
    }   
})();