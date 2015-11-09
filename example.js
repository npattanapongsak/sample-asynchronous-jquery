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
	},500)
	return deferred.promise();
}
function c(b){
	var deferred = $.Deferred();
	console.log("c");
	setTimeout(function(){
		console.log("status c :"+ deferred.state());
		deferred.resolve(b+1);
	},500)
	return deferred.promise();
}
function test(){
	var deferred = $.Deferred();
	var intdata =3;
	var  p = deferred.promise();
    p.then(a).then(b).then(c).then(function(result){
    	var expected = intdata+3;
    	console.log("result should be ",expected,result);
    });
    deferred.resolve(intdata);
}
test();