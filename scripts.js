$(document).ready(function(){
    $('.inputButton').on('mousedown', function() {
    	$('.inputButton').addClass("buttonPressed");
    })
    $('.inputButton').on('mouseleave', function() {
    	$('.inputButton').removeClass("buttonPressed");
    })
    $('.inputButton').on('mouseup', function() {
    	$('.inputButton').removeClass("buttonPressed");
    })
});

angular.module('flickrSearcher', ['ngAnimate'])
.config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
})
.controller('MyController', function($scope, $http, $sce) {
	
	$scope.submitted = false;

	$scope.searchFlickr = function(keyword) {

		$scope.keyword = keyword;
		$scope.oldKeyword = $scope.keyword;
		$scope.submitted = true;

		var url = "https://api.flickr.com/services/rest";
		var request = {
			api_key: "9a5dfe2de5e497078ad0c01879ea9d1a",
			per_page: 10,
			method: "flickr.photos.search",
			text: keyword,
			format: "json",
			jsoncallback: "JSON_CALLBACK"
		};

		$http({
			method: 'JSONP',
			url: url,
			params: request
		})
		.then(function(response) {
			console.log(response.data.photos.photo);
			$scope.results = response.data.photos.photo;
			$scope.submitted = false;
			$scope.keyword = "";
		},
		function(response) {
			alert('error');
		});
	};

});

// Flickr
// Key:
// 9a5dfe2de5e497078ad0c01879ea9d1a

// Secret:
// f166385ca37ea6e4


