/// <reference path="../angular.js" />

angular.module("sportsStore")
.constant("dataUrl", "http://localhost:2403/productos/")
.controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {

    $scope.data = {};

    $http.get(dataUrl)
        .sucess(function (data) {
            $scope.data.productos = data;
        })
        .error(function (error) {
            $scope.data.error = error;
        });
});
