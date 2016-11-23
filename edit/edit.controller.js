(function () {
    'use strict';

    angular
        .module('app')
        .controller('EditController', EditController);

    EditController.$inject = ['$scope', 'UserService'];
    function EditController($scope, UserService) {
        var northern = ['', 'Chitipa', 'Karonga', 'Likoma', 'Mzimba', 'Nkhata Bay', 'Rumphi'];
        var central = ['', 'Dedza', 'Dowa', 'Kasungu', 'Lilongwe', 'Mchinji', 'Nkhotakota', 'Ntcheu', 'Ntchisi', 'Salima'];
        var southern = ['', 'Balaka', 'Blantyre', 'Chikwawa', 'Chiradzulu', 'Machinga', 'Mangochi', 'Mulanje', 'Mwanza', 'Nsanje', 'Thyolo', 'Phalombe', 'Zomba', 'Neno'];

        $scope.error = "";

        $scope.firstName = null;
        $scope.lastName = null;
        $scope.selectedRegion = null;
        $scope.selectedDistrict = null; 

        $scope.cropList = [ { name: '' } ];

        $scope.loadUser = function ()
        {
            var test = localStorage.getItem("user");
            console.log(test);
            if (test.id)
            {
                console.log(test.id);
                var response = UserService.GetById(test.id);
                $scope.user = { }
            }
            
        };

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

        $scope.saveUser = function()
        {
            $scope.user.crops = $scope.cropList;
            $scope.user.region = $scope.selectedRegion;
            $scope.user.district = $scope.selectedDistrict;
            
            UserService.update($scope.user);
        }

        $scope.addCrop = function()
        {
            var test = true;
            for (var i = 0; i < $scope.cropList.length; i++)
            {
                if ($scope.cropList[i].name == "")
                {
                    test = false;
                }
            }
            if (test == true)
            {
                $scope.error = "";
                $scope.cropList.push( { name: '' } );
            }
            else 
            {
                $scope.error = "Please enter all of the crops before adding a new one.";
            }
        };
        $scope.loadUser();
    }
})();