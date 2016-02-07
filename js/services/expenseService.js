angular.module("expenseApp").service("expenseService", function($q){

	var myExps = [];

	this.addExpense = function(newExp){
		if(newExp.cents > 0 && newExp.cents < 10){
			newExp.cents = 0 + newExp.cents;
		}
		newExp.id = Math.floor(Math.random()*9999999999).toString();
		newExp.status = "New";
		myExps.push(newExp);
	};

	this.getMyExps = function(){
		// console.log("myExps: ", myExps)
		return myExps;
	};

	this.editExpense = function(exp, thisExp){
		console.log("thisExp", thisExp);
		console.log("exp", exp);
		for(var i = myExps.length - 1; i >= 0 ; i--){
			if(myExps[i].id === thisExp.id){
				thisExp.merchant = thisExp.merchant || myExps[i].merchant;
				thisExp.dollars = thisExp.dollars || myExps[i].dollars;
				thisExp.cents = thisExp.cents || myExps[i].cents;
				thisExp.month = thisExp.month || myExps[i].month;
				thisExp.day = thisExp.day || myExps[i].day;
				thisExp.year = thisExp.year || myExps[i].year;
				thisExp.date = new Date(thisExp.month.toString() + "/" + thisExp.day.toString() + "/" + thisExp.year.toString());
				thisExp.comments = thisExp.comments || myExps[i].comments;
				thisExp.status = thisExp.status || myExps[i].status;
				myExps.splice(i,1);
				myExps.push(thisExp);
			};
		};
		return myExps;
	};

	this.reimburseExpense = function(exp){
		console.log("got here")
		console.log("exp", exp);
		for(var i = myExps.length - 1; i >= 0 ; i--){
			if(myExps[i].id === exp.id){
				exp.status = "Reimbursed";
				myExps.splice(i,1);
				myExps.push(exp);
			};
		};
		return myExps;
	};

	this.cancelExpense = function(exp){
		for(var i = myExps.length - 1; i >= 0 ; i--){
			if(myExps[i].id === exp.id){
				myExps.splice(i,1);
			};
		};
		return myExps;
	};


	// what would be if sending to database

	// this.editExpense = function(thisExp){
	// 	var dfd = $q.defer();
	// 	$http({
	// 		method: "PUT",
	// 		url: "/api/editExpense",
	// 		data: thisExp,
	// 	}).then(function(){
	// 		dfd.resolve();
	// 	});
	// 	return dfd.promise;
	// }



	// what would be if sending to database

	// this.addExpense = function(newExp){
	// 	var dfd = $q.defer();
	// 	$http({
	// 		method: "POST",
	// 		url: "/api/addExpense",
	// 		data: newExp
	// 	}).then(function({
	// 		dfd.resolve();
	// 	}))
	// 	return dfd.promise;
	// };

});