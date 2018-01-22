VLApp.directive('accordianDirective', [function() {
	var accordiandir = {};
	accordiandir.restrict = 'E';
	accordiandir.replace = true;
	accordiandir.scope = true;
	accordiandir.templateUrl = "templates/accordianTemplate.html";
	accordiandir.controller = "accordianCtrl";

	accordiandir.link = function(scope, elem, attr) {
		var accordion = angular.element(elem);
		if(attr.id) {
			scope.fetchComponentData(attr.id);
		}
	}
	return accordiandir;
}]);
