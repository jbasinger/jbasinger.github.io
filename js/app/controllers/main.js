/**
 * Created by jbasinger on 1/16/2015.
 */
angular.module('svl.blog').controller('MainCtrl', ['$rootScope', '$scope', 'posts', function($rootScope, $scope, posts) {

  $scope.posts = posts.posts;

}]);