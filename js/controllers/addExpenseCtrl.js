angular.module("expenseApp").controller("addExpenseCtrl", function($scope, $location, expenseService, user){

	$scope.user = user;
	$scope.checkUser = function(){
		if(!user){
			$location.path("/login")
		}
	}();

	$scope.addExpense = function(newExp){
		if(!newExp.merchant || !newExp.dollars || !newExp.cents || !newExp.month || !newExp.day || ! newExp.year || !newExp.comments){
			return alert("form is incomplete");
		} else  if(newExp.cents > 99 || newExp.cents < 0 || newExp.dollars < 0){
			return alert("invalid amount entered");
		} else {
			newExp.date = new Date(newExp.month.toString() + "/" + newExp.day.toString() + "/" + newExp.year.toString());
			if(newExp.date > new Date()){
				return alert("Invalid date. Can't expense in the future")
			} else {
				expenseService.addExpense(newExp);
				$scope.newExp = '';
			}
		}
	};

	$scope.cancelAdd = function(newExp){
		$scope.newExp = ''
	};

	



	$scope.days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	$scope.months = [1,2,3,4,5,6,7,8,9,10,11,12];
	$scope.years = [2015,2016];

});