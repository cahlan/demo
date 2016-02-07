angular.module("expenseApp").controller("loginCtrl", function($scope, authService){

	$scope.checkCredentials = function(credentials){
		authService.checkCredentials(credentials);
	}

});