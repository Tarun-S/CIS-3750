(function () {
    'use strict';

    angular
        .module('app')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$rootScope'];
    function ContactController($rootScope) {
        var vm = this;

    }
})();