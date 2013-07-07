/**
* declaration File.
*
*/
/// <reference path="./jquery.d.ts" />
function myFunc() {
    var $divs = jQuery(".div"), i, iz;

    console.log(jQuery);
    console.log($divs.length);

    for (i = 0, iz = $divs.length; i < iz; i++) {
        console.log($divs[i]);
        $($divs[i]).text("string");
    }
}
//@ sourceMappingURL=script.js.map
