(function () {
    'use strict';

    angular
        .module('app')
        .controller('SurveySampleController', SurveySampleController);


    SurveySampleController.$inject = ['$scope', '$window'];
    function SurveySampleController($scope)
    {
   
        $scope.submitSurvey = function($window)
        {
        	console.log($scope.checkBox);
        	$scope.TArea = '';
        	$scope.checkBox = '';
        	window.alert('Thank you for your input');
        };

    }
})();