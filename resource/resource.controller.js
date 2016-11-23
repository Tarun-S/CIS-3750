(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResourceController', ResourceController);

    ResourceController.$inject = ['$scope', '$http'];
    function ResourceController($scope, $http) 
    {
        var resourceArray = $http.get('http://localhost:8000/resources/')
                .then(function(res) {return res.data}, function(msg) {return msg});
            var header = null;
            var headerInfo = null;
            var title = null;
            var date = null;
            var tags = null;
            var content = null;
            var contentInfo = null;
            
        $scope.doWork = function()
        {
            for (var i = 0; i < resourceArray.length; i++)
            {
                if(resourceArray[i].title == undefined
                || resourceArray[i].author == undefined
                || resourceArray[i].date == undefined
                || resourceArray[i].tags == undefined
                || resourceArray[i].content == undefined)
                {
                    console.log("Error reading resource #" + i);
                }
                header = angular.element("<div/>");
                header.addClass("active");
                header.html(resourceArray[i].title  + "<br>"
                            + resourceArray[i].author + "<br>" 
                            + resourceArray[i].date   + "<br>"
                            + resourceArray[i].tags);

                content = angular.element("<div/>");
                content.css("visibility", "hidden");
                content.text(resourceArray[i].content);

                header.on("click", contentClosure(content));

                header.append(content);
                angular.element(document.getElementById("resources")).append(header);
            }
        };

        function contentClosure(content)
        {
            console.log("testing123");
            return function()
            {
                if(content.css("visibility") === "hidden")
                {
                    content.css("visibility", "visible");
                }
                else
                {
                    content.css("visibility", "hidden");
                }
            }
        }

        $scope.doWork();   
    }
})();