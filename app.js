var app = angular.module("myApp", ["ngMaterial", "angular-sortable-view"]);
app.controller("appController", function  ($scope) {

        $scope.task = function (user) {
            console.log('user', user);
            $scope.project.Todo.push(user);
            $scope.user = "";

        };

        $scope.project = {
            Todo: [],
            Doing: [],
            Review: [],
            Done: []

        };

    });



  

