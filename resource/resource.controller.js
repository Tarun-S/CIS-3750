(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResourceController', ResourceController);

    ResourceController.$inject = ['$scope'];
    function ResourceController($scope) 
    {
        console.log("hello?");
        // var resourceArray = $http.get('localhost:8000/resources/').then(handleSuccess, handleError('Error getting all resources'));

        // var header = null;
        // var headerInfo = null;
        // var title = null;
        // var date = null;
        // var tags = null;
        // var content = null;
        // var contentInfo = null;

        // for (var i = 0; i < resourceArray.length; i++)
        // {
        //     console.log(i);
        //     header = angular.element("<div/>");
        //     header.addClass("active");
        //     header.text(resourceArray[i].title  + "\n"
        //               + resourceArray[i].author + "\n" 
        //               + resourceArray[i].date   + "\n"
        //               + resourceArray[i].tags);

        //     content = angular.element("<div/>");
        //     content.css("visibility", "hidden");
        //     content.text(resourceArray[i].content);

        //     header.on("click", function()
        //     {
        //         if(content.css("visibility") === "hidden")
        //         {
        //             content.css("visibility", "visible");
        //         }
        //         else
        //         {
        //             content.css("visibility", "hidden");
        //         }
        //     });

        //     header.append(content);
        //     $scope.resources.append(header);
        // }
    }
})();