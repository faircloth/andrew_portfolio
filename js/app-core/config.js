let config = function($urlRouterProvider, $stateProvider) {
  
  // if route not detected, send to root
  $urlRouterProvider.otherwise('/');

  // front-end routes
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      views: {
        navbar: {
          templateUrl: 'templates/app-layout/navbar.tpl.html'
        },
        content: {
          templateUrl: 'templates/home.tpl.html'
        }
      }
    })
    ;

};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;