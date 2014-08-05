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
    	{image: '../images/we_worked_with_this_well_known_business.jpeg', text: 'Strategy I have seen used most. Namedrop with business reference.'},
    	{image: '../images/we_worked_with_this_well_known_business_2.jpeg', text: 'Namedrop with business and specific building.'},
    	{image: '../images/we_worked_on_this_well_known_building.jpeg', text: 'Other options. We worked on this well know location.'},
    	{image: '../images/we_do_these_type_of_project.jpg', text: 'We do these types of projects. '},
    	{image: '../images/we_do_these_type_of_project_2.jpg', text: 'And these types of projects.'},
    	{image: '../images/we_do_these_type_of_project_3.jpg', text: 'And even these types of projects.'},
    	{image: '../images/look_at_how_we_do_it.jpeg', text: 'This is how we do it. Highlight safety, equipment, best practices, ect.'},
    	{image: '../images/finished_products.jpg', text: 'Here is what you can expect our finished products to look like.'}
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
