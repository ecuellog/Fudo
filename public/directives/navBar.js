myApp.directive("navBar", function(){
	return {
		replace: true,
		templateUrl: "public/directives/navBar.html"
	};
});

myApp.controller("navBarCtrl", ["$scope", function($scope){
	$scope.accountStatus = "Login";
}]);

alert('here');
