angular.module("expenseApp").controller("editExpenseCtrl", function($scope, $routeParams, $location, expenseService, myExps, user){

	$scope.user = user;
	$scope.checkUser = function(){
		if(!user){
			$location.path("/login")
		}
	}();

	$scope.myExps = myExps;
	$scope.thisExpId = $routeParams.id;

	$scope.editExpense = function(exp, thisExp){
		thisExp.id = $routeParams.id;
		expenseService.editExpense(exp, thisExp);
	};



	$scope.days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	$scope.months = [1,2,3,4,5,6,7,8,9,10,11,12];
	$scope.years = [2015,2016];

});