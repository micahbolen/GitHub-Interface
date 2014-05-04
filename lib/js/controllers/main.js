angular.module("github-interface")
  .controller('main', ['$scope', 'Restangular', function($scope, Restangular) {
  	$scope.org;
  	$scope.$watch('org', function() {
  		if($scope.org)
  		  $scope.repos = Restangular.all($scope.org + "/repos").getList().$object;
  	});
  }]);