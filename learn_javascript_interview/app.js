var app = angular.module('myApp',[]);

app.controller('myController', function($scope, $http){
	$scope.userFound = false;
	$scope.userNotFound = false;

	$http.get('https://api.github.com/users')
	.success(function(data){
		if(data.length>0){
			$scope.userFound = true;
			$scope.details = data;
		}else{
			$scope.userNotFound = true;
		}
	})
	.error(function(){
		$scope.userNotFound = true;
	})
});