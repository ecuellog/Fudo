myApp.directive("navBar", function(){
	return {
		replace: true,
		templateUrl: "public/directives/navBar.html"
	};
});

myApp.controller("navBarCtrl", ["$scope", "ModalService", function($scope, ModalService){
	$scope.accountStatus = "Sign In";

	var vm = this;
	$scope.vm = vm;

	vm.openModal = openModal;
	vm.closeModal = closeModal;

  initController();

  function initController() {
    vm.bodyText = 'This text can be updated in modal 1';
  }
  
  function openModal(id){
    ModalService.Open(id);
  }

  function closeModal(id){
    ModalService.Close(id);
  }
}]);
