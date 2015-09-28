/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2015, Codrops
 * http://www.codrops.com
 */
!function(){"use strict";function e(){o()}function o(){r.addEventListener("click",i),s.addEventListener("click",n),a.addEventListener("canplaythrough",d),a.addEventListener("ended",n)}function d(){classie.add(t,"video-loaded")}function i(){a.currentTime=0,classie.remove(c,"video-wrap--hide"),classie.add(c,"video-wrap--show"),setTimeout(function(){a.play()},600)}function n(){classie.remove(c,"video-wrap--show"),classie.add(c,"video-wrap--hide"),a.pause()}var t=document.body,c=document.querySelector(".video-wrap"),a=c.querySelector("video"),r=document.querySelector(".action--play"),s=document.querySelector(".action--close");e()}();