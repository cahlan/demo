angular.module("expenseApp", ["ngRoute"]).config(function($routeProvider, $locationProvider){

	$routeProvider
	.otherwise({
		redirectTo: "/login",
	})
	.when('/login', {
		templateUrl: 'templates/login.html',
	    controller: 'loginCtrl',
	})
	.when('/home', {
		templateUrl: 'templates/home.html',
	    controller: 'homeCtrl',
	    resolve: {
			myExps: function(expenseService) {
				return expenseService.getMyExps();
			},
			user: function(authService){
	    		return authService.checkUser();
	    	},
		},
	})
	.when('/add', {
		templateUrl: 'templates/addExpense.html',
	    controller: 'addExpenseCtrl',
	    resolve: {
	    	user: function(authService){
	    		return authService.checkUser();
	    	},
	    }
	})
	.when('/edit/:id', {
		templateUrl: 'templates/editExpense.html',
	    controller: 'editExpenseCtrl',
	    resolve: {
			myExps: function(expenseService) {
				return expenseService.getMyExps();
			},
			user: function(authService){
	    		return authService.checkUser();
	    	},
		},
	})
});