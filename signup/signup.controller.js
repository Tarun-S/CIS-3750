(function () {
    'use strict';

    angular
        .module('app')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$scope'];
    function SignupController($scope) 
    {
        var northern = ['', 'Chitipa', 'Karonga', 'Likoma', 'Mzimba', 'Nkhata Bay', 'Rumphi'];
        var central = ['', 'Dedza', 'Dowa', 'Kasungu', 'Lilongwe', 'Mchinji', 'Nkhotakota', 'Ntcheu', 'Ntchisi', 'Salima'];
        var southern = ['', 'Balaka', 'Blantyre', 'Chikwawa', 'Chiradzulu', 'Machinga', 'Mangochi', 'Mulanje', 'Mwanza', 'Nsanje', 'Thyolo', 'Phalombe', 'Zomba', 'Neno'];
  
        $scope.selectedRegion = null;
        $scope.selectedDistrict = null;   
        
        $scope.getRegions = function()
        {
            var list = ['', 'Central', 'Northern', 'Southern'];
            return list
        };
  
        $scope.filterDistricts = function()
        {
            var list = []
            if ($scope.selectedRegion !== '')
            {
                if ($scope.selectedRegion == "Northern")
                {
                    list = northern;
                }
                else if ($scope.selectedRegion == "Central")
                {
                    list = central;
                }
                else if ($scope.selectedRegion == "Southern")
                {
                    list = southern;
                }
            }
            return list;
        };
    }   

})();