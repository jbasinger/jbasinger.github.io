/**
 * Created by jbasinger on 1/16/2015.
 */
angular.module('svl.blog').factory('posts', ['$q', '$http', '$log', function($q, $http, $log) {

  var service = {
    posts: [],
    drafts: []
  };

  service.load = function() {

    var def = $q.defer();

    $http.get('js/app/posts.json').success(function(data, status) {

      var httpRequests = [];

      _.each(data.posts, function(post) {
        var req = $http.get('_posts/' + post).success(function(postData, postStatus) {

          service.posts.push(postData);

        }).error(function(postData, postStatus) {
          $log.log('Couldn\'t load post: ' + post);
        });

        httpRequests.push(req);

      });

      $q.all.apply(null, httpRequests).then(function() {
        def.resolve(true);
      }, function() {
        $log.log('Error loading stuff');
        def.reject('Error loading stuff');
      });

    }).error(function(data, status) {
      alert('Error loading posts.json');
      $log.log("ERROR LOADING POSTS.JSON");
      $log.log(data);
      $log.log(status);
      def.reject("error loading posts.json");
    });

    return def.promise;
  };

  return service;

}]);