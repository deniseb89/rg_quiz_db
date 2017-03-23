angular
    .module('AngularApp')
    .controller('QuestionTwoController', [
        '$scope',
        function($scope) {

            $scope.buttonOneClickHandler = function(e) {
                e.preventDefault();
                window.alert('Button #1 Clicked');
            };

            $scope.buttonTwoClickHandler = function() {
                var answer = window.prompt('How old are you?');
                $scope.futureAge = parseInt(answer) + (3 * 10);
            };

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
                    for (var i = 0, n = numbersArray.length; i < n; ++i) {
                        sum += parseInt(numbersArray[i].value);
                    }
                    return sum;
                };
                $scope.sum = sumFn($scope.numbersToAdd);
            };

            $scope.fizzBuzzNumbers = [0, 1, 3, 15, -30, 11, 17];

            $scope.getFizzBuzzResult = function(number) {
                if (number) {
                    if (number % 15 === 0)
                        return "FizzBuzz";
                    else if (number % 3 === 0)
                        return "Fizz";
                    else if (number % 5 === 0)
                        return "Buzz";
                    else
                        return "<???>";
                } else {
                    return "<???>";
                }
            };
            $scope.counter = 0;
            $scope.scrollPosition = document.body.scrollTop;
            window.addEventListener("scroll", function() {
                if ($scope.scrollPosition < document.body.scrollTop && $scope.counter < 100) {
                    $scope.counter += 1;
                } else {
                    if ($scope.counter > 0) {
                        $scope.counter -= 1;
                    }
                }
                console.log($scope.counter);
                $scope.scrollPosition = document.body.scrollTop;
                $scope.$apply();
            });
        }
    ]);