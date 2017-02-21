(function() {
    'use strict';

    function clone(obj) {
        var result = {};
        
        for (var p in obj) {
            if (typeof obj[p] === 'object' && obj[p] !== null) {
                result[p] = clone(obj[p]);
            } else {
                result[p] = obj[p];
            }
        }
        // result.prototype = Object.create(obj.prototype);
        return result;
    }

    var a = {x: {y: 4}, z: 'coucou', a: null};
    var b = clone(a);
    b.x.y = 5;
    b.z = 'salut';
    console.log('a', a);
    console.log('b', b);
    a = [3, 6, 'kiki'];
    b = clone(a);
    console.log('a', a);
    console.log('b', b);
})();
