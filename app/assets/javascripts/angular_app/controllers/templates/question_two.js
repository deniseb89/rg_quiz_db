angular
  .module('AngularApp')
  .controller('QuestionTwoController', [
  '$scope',
  function($scope) {

    $scope.buttonOneClickHandler = function() {
      window.alert('Button #1 Clicked');
    }

    $scope.buttonTwoClickHandler = function() {
      var answer = window.prompt('How old are you?');
      $scope.futureAge = answer + (3 * 10);
    }

    $scope.numbersToAdd = [
      { value: 0 },
      { value: 7 },
      { value: 17 },
      { value: 19 },
      { value: 23 }
    ];

    $scope.buttonThreeClickHandler = function() {
      var sumFn = function(numbersArray) {
        var sum = 0;
        for (var i = 1, n = numbersArray.length; i < n; ++i) {
          sum += numbersArray[i].value;
        }
        return sum;
      }
      $scope.sum = sumFn($scope.numbersToAdd);
    }

    $scope.fizzBuzzNumbers = [ 0, 1, 3, 15, -30, 11, 17 ];

    $scope.getFizzBuzzResult = function(number) {
      // TODO: Should return "Fizz", "Buzz" or "FizzBuzz"
      return '<???>';
    }

  }
]);
