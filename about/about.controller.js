(function () {
    'use strict';

    angular
        .module('app')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$rootScope'];
    function AboutController($rootScope) {
        var vm = this;
    }
})();