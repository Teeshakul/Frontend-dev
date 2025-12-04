// Without strict mode → no error for duplicate params, global variable created

"use strict";

function demo(a, a) { // ❌ duplicate parameters (strict mode error)
    // total = 10;  // ❌ creates global variable
    // delete total; // ❌ cannot delete variables

    console.log("Fixed version");

    let total = 10; // correct
}

demo(5, 10);
