/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
!function(e){"use strict";function n(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function s(e,n){var s=t(e,n)?a:o;s(e,n)}var t,o,a;"classList"in document.documentElement?(t=function(e,n){return e.classList.contains(n)},o=function(e,n){e.classList.add(n)},a=function(e,n){e.classList.remove(n)}):(t=function(e,s){return n(s).test(e.className)},o=function(e,n){t(e,n)||(e.className=e.className+" "+n)},a=function(e,s){e.className=e.className.replace(n(s)," ")});var c={hasClass:t,addClass:o,removeClass:a,toggleClass:s,has:t,add:o,remove:a,toggle:s};"function"==typeof define&&define.amd?define(c):"object"==typeof exports?module.exports=c:e.classie=c}(window),function(){"use strict";function e(){n()}function n(){d.addEventListener("click",t),r.addEventListener("click",o),i.addEventListener("canplaythrough",s),i.addEventListener("ended",o)}function s(){classie.add(a,"video-loaded")}function t(){i.currentTime=0,classie.remove(c,"video-wrap--hide"),classie.add(c,"video-wrap--show"),setTimeout(function(){i.play()},600)}function o(){classie.remove(c,"video-wrap--show"),classie.add(c,"video-wrap--hide"),i.pause()}var a=document.body,c=document.querySelector(".video-wrap"),i=c.querySelector("video"),d=document.querySelector(".action--play"),r=document.querySelector(".action--close");e()}();