(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResourceController', ResourceController);

    ResourceController.$inject = ['$scope', '$http'];
    function ResourceController($scope, $http) 
    {
        var header = null;
        var headerInfo = null;
        var title = null;
        var date = null;
        var tags = null;
        var content = null;
        var contentInfo = null;
        var resourceArray = $http.get('http://localhost:8000/resources/')
            .then(function(res) {
                res = res.data.results;
                for (var i = 0; i < res.length; i++)
                {
                    if(res[i].title === undefined
                        || res[i].author === undefined
                        || res[i].date === undefined
                        || res[i].tags === undefined
                        || res[i].content === undefined)
                    {
                        console.log("Error reading resource #" + i);
                        console.log(res[i]);
                    }
                    else
                    {
                        header = angular.element("<div/>");
                        header.addClass("active panel-collapse resource");
                        header.html(res[i].title  + "<br>"
                                    + res[i].author + "<br>"
                                    + res[i].date   + "<br>"
                                    + res[i].tags);

                        content = angular.element("<div/>");
                        content.addClass("panel-body interior");
                        content.css("display", "none");
                        content.text(res[i].content);

                        header.on("click", contentClosure(content));

                        header.append(content);
                        angular.element(document.getElementById("resources")).append(header);
                    }
                }
            }, function(msg) {return msg});

        function contentClosure(content)
        {
            console.log("testing123");
            return function()
            {
                if(content.css("display") === "none")
                {
                    content.css("display", "block");
                }
                else
                {
                    content.css("display", "none");
                }
            }
        }  
    }
})();
