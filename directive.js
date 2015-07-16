
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module("shoelace.themeSwitcher",[])  
.directive('slthemeswitcher', function () {

    
    var controller = ['$scope','$http', 
    function($scope,$http){
        /*
        // initialize localStorage with default theme
        $scope.$storage = $localStorage.$default({
            theme: {   name: "", url }
        });        
        */
        $scope.activateTheme = function(theme)
        {
            //replace with switch on which version
            // don't do anything if the theme is the same
            /*
            if (theme.name !== $scope.themename) {
               
                // set the model so the directive updates
                $scope.themename = theme;
                $scope.currentThemeUrl = theme.cssCdn;
                // save the new theme to localStorage
                $scope.$storage.themename = theme.name;
            } 
            */
           if ($scope.currentThemeUrl !== theme.cssCdn){
                console.log('update theme');
             $scope.currentThemeUrl = theme.cssCdn;
         }
        }

        $http.get("http://api.bootswatch.com/3/")
                .success(function(data) {
                 $scope.bootswatch = data;
                 $scope.currentTheme = data.themes[0];
                 console.log("bootswatchversion:"+data.version);
     

}).error(function(error){
    //$(".alert").toggleClass("alert-info alert-danger");
    //$(".alert h4").text("Failure!");
    console.log("ERROR:"+error);
});

    }];


   var template = '<link rel="stylesheet" ng-href="{{currentThemeUrl}}" /><select ng-model="currentTheme" required=true ng-options="theme.name for theme in bootswatch.themes" ng-change="activateTheme(currentTheme)"></select>';

    return {
        restrict: 'E',
        controller: controller,
        template: template
        // or
        // templateUrl: 'directive.html'
    };
})
;

