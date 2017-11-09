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
    //Sets whether the calculation is completed, used to restart after completion
    var calculated = false;

    //Main calculation function, processes all the calculation from the inputs
    //and puts output onto the calculator screen
    $scope.calculate = function(){
        addInput2();
        if(isNaN($scope.input1) || isNaN($scope.input2) ){
          alert('');
          // $scope.resetCalculator();
          // return 0;
        }
        switch($scope.operatortxt){
          case '+':
            $scope.calculatortxt = ($scope.input1 + $scope.input2);
            break;
          case '-':
            $scope.calculatortxt = ($scope.input1 - $scope.input2);
            break;
          case '*':
            $scope.calculatortxt = ($scope.input1 * $scope.input2);
            break;
          case '/':
            $scope.calculatortxt = ($scope.input1 / $scope.input2);
            break;
          case 'To the Power of':
            $scope.calculatortxt = (Math.pow($scope.input1,  $scope.input2));
            break;
          case 'Square Root':
            $scope.calculatortxt = (Math.sqrt($scope.input1));
            break;
          default:
            $scope.resetCalculator();
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
      if(parseFloat($scope.calculatortxt) == $scope.input1)
        $scope.calculatortxt = '';
    // Prevents more than 1 0s when calculator screen is already 0
      if((num == 0 && $scope.calculatortxt == '0')
        || (num != 0 && $scope.calculatortxt == '0'))
        $scope.calculatortxt = '';
      $scope.calculatortxt += num;
    }

    //Adds an operator for the 2 inputs
    $scope.addOperator = function(operator){
      $scope.operatortxt = operator;
      addInput1();
      //Run calculation at once if SquareRoot operator is used
      if(operator == 'Square Root'){
        $scope.calculate();
      }
      //Allows another operation after getting an answer
      if(calculated = true){
        nextCalculation();
      }
    }

    //Function to reset calculator
    $scope.resetCalculator = function(){
      $scope.operatortxt = '';
      $scope.calculatortxt = '0';
      $scope.input1 = null;
      $scope.input2 = null;
      calculated = false;
    }

    //Preparation for calculation upon calculation
    function nextCalculation(){
      $scope.input2 = null;
      calculated = false;
    }

    //Puts the current calculator screen number into input 1
    function addInput1(){
      $scope.input1 = parseFloat($scope.calculatortxt);
    }

    //Puts the current calculator screen number into input 2
    function addInput2(){
      $scope.input2 = parseFloat($scope.calculatortxt);
    }

  }]);

}) ();
