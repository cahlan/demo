angular.module("expenseApp").controller("homeCtrl", function($scope, $location, myExps, expenseService, authService, user){

	$scope.myExps = myExps;
	$scope.user = user;
	console.log("myExps", myExps);

	$scope.checkUser = function(){
		if(!user){
			$location.path("/login")
		}
	}();

	$scope.reimburseExpense = function(exp){
		expenseService.reimburseExpense(exp);
	};

	$scope.cancelExpense = function(exp){
		expenseService.cancelExpense(exp);
	};

	$scope.allMyExpsView = function(view) {
		switch (view) {
			case "allExps":
				$scope.allExps = true;
				$scope.newExps = false;
				$scope.reimbursed = false;
				break;
			case "newExps":
				$scope.allExps = false;
				$scope.newExps = true;
				$scope.reimbursed = false;
				break;
			case "reimbursed":
				$scope.allExps = false;
				$scope.newExps = false;
				$scope.reimbursed = true;
				break;
			default:
				$scope.allExps = true;
				$scope.newExps = false;
				$scope.reimbursed = false;
		}
	};
	$scope.allMyExpsView('');

});