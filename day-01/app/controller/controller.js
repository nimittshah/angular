angular.module("app").controller("myController", function($scope){
	$scope.title = "Welcome to Synechron!";
	$scope.heros = [
	    {title : 'Batman',         photo : 'images/batman.jpg',        city:'Gothem',       popular:9,        releaseDate:'2015-09-16',    ticketPrice:150.45678},
	    {title : 'Ironman',         photo : 'images/ironman.jpg',    city:'New York',   popular:8,        releaseDate:'2015-09-17',    ticketPrice:122.75846},
	    {title : 'Spiderman',         photo : 'images/spiderman.jpg',   city:'New York',   popular:7,        releaseDate:'2015-08-18',    ticketPrice:150.67458},
	    {title : 'Phantom',         photo : 'images/phantom.jpg',    city:'Bangalla',   popular:4,        releaseDate:'2015-09-19',    ticketPrice:75.78456},
	    {title : 'Superman',         photo : 'images/superman.jpg',    city:'Metropolis', popular:6,        releaseDate:'2015-08-20',    ticketPrice:200.45678},
	    {title : 'Rajani',             photo : 'images/rajani.jpg',    city:'Chennai',       popular:10,        releaseDate:'2015-09-21',    ticketPrice:450.67845}
	];
	$scope.myFilter;
	$scope.val = "title";
	$scope.reverse = false;
	
	$scope.sortOn = function(){
		$scope.val = arguments[0];
	}
	
	$scope.home = function(){
		$location.path() = "07_module.html"
		$route.current.templateUrl = "/about"
	}
});