myApp.directive("loginModal", function(){
	return {
		replace: true,
		templateUrl: "public/directives/loginModal.html"
	};
});

//myApp.controller("loginModalCtrl", ["$scope", function($scope){
	//$scope.accountStatus = "Sign In";
//}]);