/**
 * Created by jbasinger on 1/16/2015.
 */
angular.module('svl.blog').controller('MainCtrl', ['$rootScope', '$scope', 'posts', 'config', function($rootScope, $scope, posts, config) {

  $scope.posts = posts.posts;

  $rootScope.title = config.title;

}]);