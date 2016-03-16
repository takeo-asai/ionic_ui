angular.module('routes', ['ionic', 'starter.controllers'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/playlists');

  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  // Header
  .state('app.headers', {
    url: '/headers',
    views: {
      'menuContent': {templateUrl: 'templates/headers/index.html'}
    }
  })

  .state('app.buttons', {
    url: '/buttons',
    views: {
      'menuContent': {
        templateUrl: 'templates/buttons/index.html'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })


    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback

});