(function(){

  var app = angular.module('calculator',[]);

  app.controller('CalculatorController', ['$scope', function($scope){

    //Numbers shown on calculator screen
    $scope.calculatortxt = '0';
    //Operators shown on calculator screen
    $scope.operatortxt = '';
    //First number, second number and calculated answer
    $scope.input1 = null;
    $scope.input2 = null;
    $scope.output = 0
    //Sets whether the calculation is completed, used to restart after completion
    var calculated = false;

    //Main calculation function, processes all the calculation from the inputs
    //and puts output onto the calculator screen
    $scope.calculate = function(){
        addInput2();
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
          case '^':
            $scope.calculatortxt = Math.pow($scope.input1,  $scope.input2);
            break;
          case 'sqrt':
            $scope.calculatortxt = Math.sqrt($scope.input1);
            break;
          default:
            alert("Something's wrong! Please reset Calculator(C)");
        }
        calculated = true;
    }

    $scope.addDecimal = function(){
      if(!$scope.calculatortxt.includes('.')){
        $scope.calculatortxt += '.';
      }
    }

    $scope.addNumber = function(num){
      //Reset Calculator after the last calculation
      if(calculated == true)
        $scope.resetCalculator();
      //Clears calculator screen when second number is being input
      if(parseInt($scope.calculatortxt) == $scope.input1)
        $scope.calculatortxt = '';
    // Prevents more than 1 0s when calculator screen is already
      if(num == 0 && $scope.calculatortxt == '0')
        $scope.calculatortxt = '';
      $scope.calculatortxt += num;
    }

    //Adds an operator for the 2 inputs
    $scope.addOperator = function(operator){
      $scope.operatortxt = operator;
      addInput1();
      //Run calculation at once if SquareRoot operator is used
      if(operator == 'sqrt'){
        $scope.calculate();
      }
    }

    //Function to reset calculator
    $scope.resetCalculator = function(){
      $scope.operatortxt = '';
      $scope.calculatortxt = '0';
      $scope.input1 = null;
      $scope.input2 = null;
      $scope.output = 0;
      calculated = false;
    }

    //Puts the current calculator screen number into input 1
    function addInput1(){
      $scope.input1 = parseInt($scope.calculatortxt);
    }

    //Puts the current calculator screen number into input 2
    function addInput2(){
      $scope.input2 = parseInt($scope.calculatortxt);
    }

  }]);

}) ();
