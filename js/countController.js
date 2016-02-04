angular.module('app').controller('countController', function($scope){
	$scope.contador = 0;
	$scope.addOne = function (){
		$scope.contador++;
	}
});