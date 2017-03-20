angular
  .module('AngularApp')
  .controller('QuizController', [
  '$scope',
  function($scope) {

    console.log('~~~ init QuizController');

    this.copy = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio rem reiciendis laudantium, dolor facilis temporibus maxime amet autem assumenda quod quae alias ipsa quam nulla vero doloribus tenetur quasi voluptas!'

  }
]);
