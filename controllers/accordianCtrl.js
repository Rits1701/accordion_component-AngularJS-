VLApp.controller('accordianCtrl', ['$scope','APPCONSTANT', function($scope,APPCONSTANT) {
	$scope.state = {};
	$scope.accordionIndex = -1;

	$scope.fetchComponentData = function(strCompId) {
		if($scope.appData.data[strCompId]) {
            $scope.state = $scope.appData.data[strCompId];
        }
	}

	$scope.switchAcc = function(event, index) {
		console.log("event, index", event, index)
		if ($scope.accordionIndex == index) {
			$scope.accordionIndex = -1;
		} else {
			$scope.accordionIndex = index;
		}
        ActionManager.dispatchAction(APPCONSTANT.ACCORDION_CHANGED,{"index":$scope.accordionIndex});
	}
}]);



//Code will not use

/*if($scope.state.accordion[index].active == false){
    for(i=0;i<$scope.state.accordion.length;i++){
        $scope.state.accordion[i].active = false;
    }
    $scope.state.accordion[index].active =true;
}else{
    $scope.state.accordion[index].active = false;
}*/

//console.log("index....",index,$('.panel-collapse'));
/*if($scope.previousIndex == index){
    $scope.accordianData[index].active = false;
    $('.panel-collapse:eq('+index+')').collapse('hide');
    $scope.previousIndex = -1;
}
else{
    if($scope.previousIndex != -1){
        $('.panel-collapse:eq('+$scope.previousIndex+')').collapse('hide');
        $scope.accordianData[$scope.previousIndex].active = false;
    }
    $scope.accordianData[index].active = true;
    $('.panel-collapse:eq('+index+')').collapse('show');
    $scope.previousIndex = index;
}
console.log(" index ", index);*/
