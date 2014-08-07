'use strict';

/**
 * @ngdoc function
 * @name walshApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the walshApp
 */
angular.module('walshApp')
  .controller('HomeCtrl', function ($scope) {
  	//carousel control
 	$scope.myInterval = 5000;
    $scope.slides = [
      {image: './images/stock1.jpg', text: 'Stock photo 1'},
      {image: './images/stock2.jpg', text: 'Stock photo 2'},
      {image: './images/stock3.jpg', text: 'Stock photo 3'}
  	];

}).directive('disableNgAnimate',
    ['$animate', function ($animate) {
        return {
            link: function ($scope, $element, $attrs) {

                $scope.$watch(
                    function() {
                        return $scope.$eval($attrs.setNgAnimate, $scope);
                    },
                    function(newVal) {
                        $animate.enabled(!!newVal, $element);
                    }
                );
            }
        };
    }]
);
