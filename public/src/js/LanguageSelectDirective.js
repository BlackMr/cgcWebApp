// angular.module('Cgcwebapp') .directive('ngTranslateLanguageSelect', function (LocaleService) { 'use strict';

//         return {
//             restrict: 'A',
//             replace: true,
//             template: ''+
//             '<div class="language-select" ng-if="visible">'+
//                 '<div ng-repeat="localesDisplayName in localesDisplayNames">'+
//                     '<button ng-click="changeLanguage(localesDisplayName)">'+ 
//                     '{{ localesDisplayName }}'+
//                     '</button>'+
//                 '</div>'+
//             '</div>'+
//             '',
//             controller: function ($scope) {
           
//                 $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
//                 $scope.visible = $scope.localesDisplayNames &&
//                 $scope.localesDisplayNames.length > 1;
    
//                 $scope.changeLanguage = function (locale) {
//                     LocaleService.setLocaleByDisplayName(locale);
//                     console.log(LocaleService.getLocaleDisplayName());
     
//                 };


//                     console.log("*************************");
//                 console.log($scope.localesDisplayNames);
//                 console.log($scope.localesDisplayNames[0]);
//                 console.log($scope.localesDisplayNames[1]);
//                 console.log("*************************");
//             }
//         };
//     });



angular.module('Cgcwebapp') .directive('ngTranslateLanguageSelect', function (LocaleService) { 'use strict';

        return {
            restrict: 'A',
            replace: true,
            template: ''+
            '<div class="language-select" ng-if="visible">'+
                '<label>'+
                    '{{"directives.language-select.Language" | translate}}'+
                    '<select class="selectBox" ng-model="currentLocaleDisplayName"'+
                        'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
                        'ng-change="changeLanguage(currentLocaleDisplayName)">'+
                    '</select>'+
                '</label>'+
            '</div>'+
            '',
            controller: function ($scope) {
                $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
                $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
                $scope.visible = $scope.localesDisplayNames &&
                $scope.localesDisplayNames.length > 1;
    
                $scope.changeLanguage = function (locale) {
                    LocaleService.setLocaleByDisplayName(locale);
                };
            }
        };
    });
