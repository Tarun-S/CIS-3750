(function () {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$rootScope'];
    function SearchController($rootScope) {
        var vm = this;

    }
})();