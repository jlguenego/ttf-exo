'use strict';

var app = angular.module('tt-star', []);

app.directive('ttStar', function($compile) {
    'ngInject';
    return {
        scope: {
            n: '=note'
        },
        controller: function TtStarCtrl($scope, $element) {
            'ngInject';
            console.log('tt-star controller', arguments);
            $scope.update = function(note) {
                console.log('update', arguments);
                $scope.n = note;
            };
            $scope.$watch('n', function() {
                var html = '';
                var note = $scope.n;
                note = (note === undefined) ? 0: note;
                note = (isNaN(note)) ? 0: note;
                note = (note > 5) ? 5: note;
                note = (note < 0) ? 0: note;
                for(var i = 0; i < note; i++) {
                    html += '<img ng-click="update(' + (i+1) + ')" src="./tt-star/img/yellow_star.png" />';
                }
                for(var i = note; i < 5; i++) {
                    html += '<img ng-click="update(' + (i+1) + ')" src="./tt-star/img/white_star.png" />';
                }
                $element.html(html);
                $compile($element.contents())($scope);
            });
        }
    };
});
