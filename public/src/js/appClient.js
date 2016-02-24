angular.module('Cgcwebapp', ['ngResource',
                            'ui.router', 
                            'pascalprecht.translate',// angular-translate
                            'tmh.dynamicLocale'])// angular-dynamic-locale])
  .constant('LOCALES', {
    'locales': {
        'en_US': 'English',
        'tr_tr': 'Türkçe'
    },
    'preferredLocale': 'en_US'
  })
  .config(['$translateProvider', function($translateProvider){
    //To get warnings in the developer console, regarding forgotten IDs in translations
    $translateProvider.useMissingTranslationHandlerLog();

    $translateProvider.useStaticFilesLoader({
        prefix: './resources/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('en_US');// is applied on first load
    //$translateProvider.useLocalStorage();// saves selected language to localStorage

  }])
  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('../src/libs/angular-i18n/angular-locale_{{locale}}.js');
  })


  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider) {
    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');


    $stateProvider

      // root path
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: '/view/home.html'
      })
       // root path
      .state('sihirlibalik', {
        url: '/sihirlibalik',
        controller: 'HomeCtrl',
        templateUrl: '/view/sb.html'
      })
       // root path
      .state('yasayanfosil', {
        url: '/yasayanfosil',
        controller: 'HomeCtrl',
        templateUrl: '/view/yf.html'
      })
       // root path
      .state('snowhite', {
        url: '/snowhite',
        controller: 'HomeCtrl',
        templateUrl: '/view/snowhite.html'
      })
       // root path
      .state('wowpaw', {
        url: '/wowpaw',
        controller: 'HomeCtrl',
        templateUrl: '/view/wowpaw.html'
      });


    // otherwise reroute to homepage  
    $urlRouterProvider.otherwise('/');

  }]);