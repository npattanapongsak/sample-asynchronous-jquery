function a(init){
	var deferred = $.Deferred();
	console.log("a");
	setTimeout(function(){
		console.log("status a :"+ deferred.state());
		deferred.resolve(init+1);
	},500);
	return deferred.promise();
}
function b(a){
	var deferred = $.Deferred();
	console.log("b");
	setTimeout(function(){
		console.log("status b :"+ deferred.state());
		deferred.resolve(a+1);
	},600)
	return deferred.promise();
}
function c(b){
	var deferred = $.Deferred();
	console.log("c");
	setTimeout(function(){
		console.log("status c :"+ deferred.state());
		deferred.resolve(b+1);
	},300)
	return deferred.promise();
}
function test(){
	
    

    $.when(a(1),b(2),c(3)).done(function(a1,b1,c1){
    	console.log("a should be 2=",a1);
    	console.log("b should be 3=",b1);
    	console.log("c should be 4=",c1);
    });
   
}
test();