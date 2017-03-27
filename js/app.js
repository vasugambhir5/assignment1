angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.aPictures = [{ image: "biryani.jpg", name: "Chicken Biryani", url: "biryani.html" },
                        { image: "chole.jpg", name: "Chole", url: "chole.html" },
						{ image: "gajar.jpg", name: "Gajar", url: "gajar.html"},
						{ image: "masala_dosa.jpg", name: "Masala Dosa", url: "masala_dosa.html" },
						{ image: "saag.jpg", name: "Saag", url: "saag.html"},
						{ image: "vada_pav.jpg", name: "Vada Pav", url: "vada_pav.html" }];
    
	
	$scope.nextPicture = function () {
        $scope.n = Math.floor((Math.random() * 6));
      
        $scope.currentPicture = $scope.aPictures[$scope.n].image;
		
		
		$scope.recipe = $scope.aPictures[$scope.n].name;
		
		$scope.url = $scope.aPictures[$scope.n].url;
	};

    $scope.n = -1;
    $scope.nextPicture();
});