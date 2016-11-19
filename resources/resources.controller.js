(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResourceController', ResourceController);

    ResourceController.$inject = ['$rootScope'];
    function ResourceController($rootScope) {
        var vm = this;

    }
})();