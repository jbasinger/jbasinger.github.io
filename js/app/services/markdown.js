/**
 * Created by Justin on 1/16/2015.
 */
angular.module('svl.blog').factory('markdown', ['$window', function($window){
  return $window.marked;
}]);