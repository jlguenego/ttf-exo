(function() {
    'use strict';

    function clone(obj) {
        var result = {};
        for (var p in obj) {
            if (typeof obj[p] === 'object' ) {
                result[p] = clone(obj[p]);
            } else {
                result[p] = obj[p];
            }
        }
        return result;
    }

    var a = {x: {y: 4}, z: 'coucou'};
    var b = clone(a);
    b.x.y = 5;
    b.z = 'salut';
    console.log('a', a);
    console.log('b', b);
})();
