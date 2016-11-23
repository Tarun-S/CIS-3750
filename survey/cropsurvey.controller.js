(function () {
    'use strict';

    angular
        .module('app')
        .controller('CropSurveyController', CropSurveyController);


    CropSurveyController.$inject = ['$scope', '$window'];
    function CropSurveyController($scope)
    {
   
        $scope.submitCrops = function($window)
        {
        	$scope.checkBox = '';
        	window.alert('Thank you for your input');
        };

    }
})();