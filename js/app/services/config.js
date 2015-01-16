/**
 * Created by jbasinger on 1/16/2015.
 */
angular.module('svl.blog').factory('config',['$q', '$http', function($q, $http) {
  var config = {};

  config.load = function() {
    var def = $q.defer();

    $http.get('js/app/config.json').success(function(data, status) {

      config = _.assign(config, data);
      def.resolve(data);

    }).error(function(data, status) {
      def.reject('Unable to load config file!');
    });

    return def.promise;
  };

  return config;
}]);