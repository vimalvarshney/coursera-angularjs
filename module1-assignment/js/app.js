angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = [$scope];
function LunchCheckController($scope){
    
    $scope.buttonClick = function(){
        
        if ($scope.lunchList ){
            var lunchArray = $scope.lunchList.split(',');
        
            if(lunchArray.length>=0 && lunchArray.length<=3)
                $scope.message = "Enjoy!";
            else
                $scope.message = "Too much!";    
        }
        else
            $scope.message = "Please enter data first";
        
        
    }
   
}