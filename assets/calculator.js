(function(){

  var app = angular.module('calculator',[]);

  app.controller('CalculatorController', ['$scope', function($scope){

    $scope.calculatortxt = '0';
    $scope.operatortxt = '';
    $scope.input1 = 0;
    $scope.input2 = 0;
    $scope.output = 0

    $scope.operations = ['+','-','*','/'];
    $scope.current_operation = '+';

    // $scope.calculate = function(){
    //   switch($scope.current_operation){
    //     case '+':
    //       $scope.output = $scope.input1 + $scope.input2;
    //       break;
    //     case '-':
    //       $scope.output = $scope.input1 - $scope.input2;
    //       break;
    //     case '*':
    //       $scope.output = $scope.input1 * $scope.input2;
    //       break;
    //     case '/':
    //       $scope.output = $scope.input1 / $scope.input2;
    //       break;
    //     default:
    //       alert("Something's wrong!");
    //       break;
    //   }
    // }

    $scope.calculate = function(){
        $scope.input2 = parseInt($scope.calculatortxt);
        switch($scope.operatortxt){
          case '+':
            $scope.calculatortxt = $scope.input1 + $scope.input2;
            break;
          case '-':
            $scope.calculatortxt = $scope.input1 - $scope.input2;
            break;
          case '*':
            $scope.calculatortxt = $scope.input1 * $scope.input2;
            break;
          case '/':
            $scope.calculatortxt = $scope.input1 / $scope.input2;
            break;
        }
    }

    $scope.addDecimal = function(){
      if(!$scope.calculatortxt.includes('.')){
        $scope.calculatortxt += '.';
      }
    }

    $scope.addNumber = function(num){
      if($scope.input1 != 0 && $scope.input2 != 0){
        $scope.resetCalculator();
      }
      $scope.calculatortxt += num;
    }

    $scope.addOperator = function(operator){
      $scope.operatortxt = operator;
      $scope.input1 = parseInt($scope.calculatortxt);
      $scope.calculatortxt = 0;
    }

    $scope.resetCalculator = function(){
      $scope.operatortxt = '';
      $scope.calculatortxt = '0';
      $scope.input1 = 0;
      $scope.input2 = 0;
      $scope.output = 0;
    }

  }]);

}) ();
