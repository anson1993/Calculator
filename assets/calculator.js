(function(){

  var app = angular.module('calculator',[]);

  app.controller('CalculatorController', ['$scope', function($scope){

    $scope.operations = ['+','-','*','/'];
    $scope.current_operation = '+';
    $scope.input1 = 1;
    $scope.input2 = 1;
    $scope.output = 2;


    $scope.calculate = function(){
      switch($scope.current_operation){
        case '+':
          $scope.output = $scope.input1 + $scope.input2;
          break;
        case '-':
          $scope.output = $scope.input1 - $scope.input2;
          break;
        case '*':
          $scope.output = $scope.input1 * $scope.input2;
          break;
        case '/':
          $scope.output = $scope.input1 / $scope.input2;
          break;
        default:
          alert("Something's wrong!");
          break;
      }
    }

  }]);

}) ();
