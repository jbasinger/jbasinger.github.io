/**
 * Created by jbasinger on 1/16/2015.
 */
angular.module('svl.blog').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('main', {
      url: "",
      templateUrl: "templates/main.html",
      controller: "MainCtrl",
      resolve: {
        postsLoad: function (posts) {
          return posts.load();
        },
        configLoad: function(config){
          return config.load();
        }
      }
    });
    //.state('state1.list', {
    //  url: "/list",
    //  templateUrl: "partials/state1.list.html",
    //  controller: function($scope) {
    //    $scope.items = ["A", "List", "Of", "Items"];
    //  }
    //})
    //.state('state2', {
    //  url: "/state2",
    //  templateUrl: "partials/state2.html"
    //})
    //.state('state2.list', {
    //  url: "/list",
    //  templateUrl: "partials/state2.list.html",
    //  controller: function($scope) {
    //    $scope.things = ["A", "Set", "Of", "Things"];
    //  }
    //});
});