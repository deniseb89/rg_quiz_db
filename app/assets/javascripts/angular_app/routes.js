angular
  .module('AngularApp')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $stateProvider
      // Users Login/Signup
      .state('index', {
        controller: 'QuizController',
        url: '/',
        templateUrl: 'angular_app/templates/index.html',
      })
      .state('questionOne', {
        controller: 'QuestionOneController',
        url: '/question-1',
        templateUrl: 'angular_app/templates/question_one.html',
      })
      .state('questionTwo', {
        controller: 'QuestionTwoController',
        url: '/question-2',
        templateUrl: 'angular_app/templates/question_two.html'
      })


    $urlRouterProvider.otherwise('/');

  }]);
