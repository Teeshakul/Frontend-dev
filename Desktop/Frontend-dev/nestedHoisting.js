"use strict";

function outer() {
    console.log(count); // undefined (var hoisted)
    var count = 5;

    function inner() {
        console.log(count); // undefined (inner's own var hoists)
        var count = 10;
    }

    inner();
}

outer();
