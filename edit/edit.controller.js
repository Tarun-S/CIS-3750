(function () {
    'use strict';

    angular
        .module('app')
        .controller('EditController', EditController);

    EditController.$inject = ['$scope', 'UserService'];
    function EditController($scope) {
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

        $scope.cropList = [ { name: '' } ];

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

        $scope.saveUser = function()
        {
            UserService.update(this);
        }

        $scope.addCrop = function()
        {
            $scope.cropList.push( { name: '' } );
            // var head = document.getElementById("croplist");
            // //find div
            // var div = document.createElement('div');

            // //add text to div
            // var label = document.createElement("Label");
            // var input = document.createElement("Input");

            // label.setAttribute("for", "input");
            // label.className = "control-label";
            // label.innerHTML = "Crop";
            // div.appendChild(label);
    
            // input.className = "form-control";
            // input.id = "crop";
            // input.setAttribute("placeholder", "Enter crop");
            // input.setAttribute("type", "text");
            // div.appendChild(input);

            // //append div to form
            // head.appendChild(div);
        };

        $scope.saveCrops = function()
        {
            var head = document.getElementById("cropList");
            var crops = head.getElementsByTagName('div');
            var cropList = [];
            for (var i = 0; i < crops.length; i += 1) 
            {
                var crop = crops[i].getElementsByTagName('input');
                cropList.push(crop.value);
            }
        };
    }
})();