// $(document).ready(function(){
//     $('.inputButton').on('mousedown', function() {
//     	$('.inputButton').addClass("buttonPressed");
//     })
//     $('.inputButton').on('mouseleave', function() {
//     	$('.inputButton').removeClass("buttonPressed");
//     })
//     $('.inputButton').on('mouseup', function() {
//     	$('.inputButton').removeClass("buttonPressed");
//     })
// });

angular.module('flickrSearcher', [])
.config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
})
.controller('MyController', function($scope, $http, $sce) {
	
	$scope.submitted = false;
	$scope.embedUrl = "https://farm{farmId}.staticflickr.com/{serverId}/{id}_{secret}.jpg";

	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	};

	$scope.searchFlickr = function(keyword) {

		$scope.keyword = keyword;
		$scope.submitted = true;

		var url = "http://api.flickr.com/services/rest";
		var request = {
			api_key: "9a5dfe2de5e497078ad0c01879ea9d1a",
			per_page: 10,
			method: "flickr.photos.search"
		};

		$http({
			method: 'GET',
			url: url,
			params: request
		})
		.then(function(response) {
			$scope.results = response.data.photos.photo;
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


