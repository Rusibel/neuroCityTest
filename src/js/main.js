import "./slider";
import draw from './modules/canvas';
import video from './modules/video';
import users from './modules/users';
import centerDivs from './modules/centerDivs';
import showNewElem from './modules/showNewElem';
import showRandSq from './modules/showRandSq';
import wsService from "./services/webSocket";


window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    wsService();
    draw();
    video();
    users();
    centerDivs('.two_divs_js');
    showNewElem('.button-styles', '#styles .row');
    showRandSq();



   

});


