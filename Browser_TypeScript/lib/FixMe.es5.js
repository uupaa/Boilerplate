var FixMeLib = (function (exports) {
    'use strict';

    var FixMe = function FixMe() {
    };
    FixMe.prototype.say = function say () {
        alert("Hello");
    };

    exports.FixMe = FixMe;

    return exports;

}({}));
