'use strict';

var app = angular.module('tt-star', []);

app.directive('ttStar', function() {
    return {
        link: function(scope, element, attr) {
            console.log('tt-star link', arguments);
            var html = '';
            var note = attr.note;
            note = (note === undefined) ? 0: note;
            note = (isNaN(note)) ? 0: note;
            note = (note > 5) ? 5: note;
            note = (note < 0) ? 0: note;
            for(var i = 0; i < note; i++) {
                html += '<img src="./tt-star/img/yellow_star.png" />';
            }
            for(var i = note; i < 5; i++) {
                html += '<img src="./tt-star/img/white_star.png" />';
            }
            element.html(html);
        }
    };
});
