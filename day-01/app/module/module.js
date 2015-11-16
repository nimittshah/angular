/*var myApp = angular.module("app", []);

myApp.controller("myController", function($scope){
	$scope.title = "Welcome to Synechron!";
});
*/
/*
angular.module("app", []);

angular.module("app").controller("myController", function($scope){
	$scope.title = "Welcome to Synechron!";
});
*/

angular.module("app", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider.when("/", {
			controller: "myController", 
			templateUrl: "app/view/gallery.html"
		})
		.when("/about", {
			controller: "myController",
			template: "<h1>About us!</h1>"
		})
	});
