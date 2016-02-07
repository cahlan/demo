angular.module("expenseApp").service("authService", function($location){

	var user = {};

	this.checkCredentials = function(credentials){

		if(credentials.username === "demo" && credentials.password === "demo"){
			user.username = credentials.username;
			user.password = credentials.password;
			$location.path("/home");
		} else {
			alert("username and password combination not found")
		}
	};

	this.checkUser = function(){
		if(user.username === "demo" && user.password === "demo"){
			return user;
		}
	};

})