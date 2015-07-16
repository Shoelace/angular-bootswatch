
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('shoelace.themeSwitcher',
[])
.controller('slThemeSwitcherCtrl',
    ['$scope','$http',
    function($scope,$http){
        
        $scope.activateTheme = function(theme)
        {
            //replace with switch on which version
            $scope.currentThemeUrl = theme.cssCdn;
        }

        $http.get("http://api.bootswatch.com/3/")
                .success(function(data) {
                 $scope.bootswatch = data;
                 $scope.currentTheme = data.themes[0];
                 console.log("bootswatchversion:"+data.version);
     

}).error(function(){
    //$(".alert").toggleClass("alert-info alert-danger");
    //$(".alert h4").text("Failure!");
    console.log("ERROR");
});

    }])    
.directive('slThemeSwitcher', function ThemeSwitcherDirective() {
		return {
			restrict: 'E',
			scope: {
		},
			template: '<div ng-controller="slThemeSwitcherCtrl">{{currentTheme}}<link rel="stylesheet" ng-href="{{currentThemeUrl}}" /><select ng-model="currentTheme" required=true ng-options="theme.name for theme in bootswatch.themes" ng-change="activateTheme(currentTheme)"></select></div>'
		};
	})

;

