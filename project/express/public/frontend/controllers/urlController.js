var app = angular.module('myApp', ['ngRoute','angular-clipboard'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '../index.html',
            controller: 'urlController'
        });
    }]);
app.controller('urlController', ['$scope', '$http', function ($scope, $http) {

    $scope.copy = false;
    $scope.close = false;
    $scope.shorten = true;
    $scope.msg = '';

    $scope.shortenUrl = function (longUrl) {
        var url = {};
        url.url = longUrl;
        $http.post('/api/generateurl', url, {}).then(function (res) {
            if (res.status === 200) {
                console.log('res', res);
                $scope.url = res.data;
                $scope.shorten = !$scope.shorten;
                $scope.copy = !$scope.copy;
                $scope.close = !$scope.close;
                console.log($scope.copy);
            } else {
                $scope.msg = res.data; //verificar o retorno de erro
            }
        });
    };

    $scope.success = function (url) {
        console.log("deu certo")
    };

    $scope.clearUrl = function () {
        $scope.url = null;
        $scope.shorten = !$scope.shorten;
        $scope.copy = !$scope.copy;
        $scope.close = !$scope.close;
    };

    $scope.getTopFive = function () {
        $http.get('/api/findtop5').then(function (res) {
            if (res.status === 200) {
                $scope.topFive = res.data.data;
            } else {
                $scope.msg = res.data; //verificar o retorno de erro
            }
        });
    };

    $scope.getTotalHits = function () {
        $http.get('/api/getTotalhits').then(function (res) {
            console.log('res hits', res.data.data[0].sum); //Arrumar
            if (res.status === 200) {
                $scope.totalHits = res.data.data[0].sum; //Arrumar isso backEnd
            } else {
                $scope.msg = res.data; //verificar o retorno de erro
            }
        });
    };

}]);