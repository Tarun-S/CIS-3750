(function () {
    'use strict';

    angular
        .module('app')
        .controller('SurveyController', SurveyController);

    SurveyController.$inject = ['$rootScope'];
    function SurveyController($rootScope) {
        var vm = this;

    }
})();