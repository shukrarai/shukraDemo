var DEMO = (function(module){
	module.RunIt=function(resultObj){
		resultObj.prepend(Date()+"<br>");
	};
	return module;
}(DEMO || {}));